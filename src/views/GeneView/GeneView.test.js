import React from "react";
import { MockedProvider } from 'react-apollo/test-utils';
import GeneView, { GET_GENE_PROFILE } from "./GeneView";
import wait from 'waait'

import { createMount } from '@material-ui/core/test-utils';

describe('GeneView', () => {
  let render;

  const mockedMatch = {
    params: {
      ensemblGeneId: 'ENSG00000134460'
    }
  }  

  const mock = {
    request: {
      query: GET_GENE_PROFILE,
      variables: {
        ensemblId: 'ENSG00000134460',
      },
    },
    result: {
      data: {
        "gene": {
          "name": "IL2RA",
          "description": "Description of IL2RA",
          "synonyms": ["synonym of IL2RA"]
        }
      },
    },
  }

  const factory = ({ mocks = [mock], match = mockedMatch }) => {
    return render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <GeneView match={match}/>
      </MockedProvider>
    );
  }

  beforeAll(() => {
    render = createMount();
  });

  it('should render', () => {
    factory({});
  });


  it('should render loading state initially', () => {
    const wrapper = factory({ mocks: [] });
    expect(wrapper.text()).toContain('Loading...')
  });

  it('should render gene info', async () => {
    const wrapper = factory({});
    await wait(0);  
    wrapper.update();

    expect(wrapper.find('h1').length).toBe(1)
    expect(wrapper.text()).toContain('IL2RA')
    expect(wrapper.text()).toContain('Description of IL2RA')
    expect(wrapper.text()).toContain('Synonyms')
    expect(wrapper.text()).toContain('synonym of IL2RA')
  });

  it('should render "N/A" if there are no synonyms available', async () => {
    const wrapper = factory({ mocks: [{
      request: {
        query: GET_GENE_PROFILE,
        variables: {
          ensemblId: 'ENSG00000134460',
        },
      },
      result: {
        data: {
          "gene": {
            "name": "IL2RA",
            "description": "Description of IL2RA",
            "synonyms": []
          }
        },
      }}] });
    await wait(0);  
    wrapper.update();
    expect(wrapper.text()).toContain('Synonyms: N/A')
  })

  it('should show error', async () => {
    const errorMock = {
      request: {
        query: GET_GENE_PROFILE,
        variables: {
          ensemblId: 'ENSG00000134460',
        },
      },
       error: new Error('aw shucks') 
    };
    
    const wrapper = factory({ mocks: [errorMock] })
    await wait(0);
    wrapper.update();

    expect(wrapper.text()).toContain('Error when querying gene profile.')
  });
});