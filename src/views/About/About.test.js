import React from 'react';
import { createShallow, createMount } from '@material-ui/core/test-utils';
import { MockedProvider } from 'react-apollo/test-utils';
import About, { GET_JAJAL } from './About';
import wait from 'waait';

describe('About view', () => {
  let wrapper;
  let shallow;
  let render;

  const mock = {
    request: {
      query: GET_JAJAL
    },
    result: {
      data: {
        jajal: 'Cache content'
      }
    }
  };

  beforeAll(() => {
    shallow = createShallow();
    render = createMount();
  });

  it('should render component', () => {
    wrapper = shallow(<About />);
    expect(wrapper.find('about').length).toBe(1);
  });

  it('should render page title and cache data', async () => {
    wrapper = render(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <About />
      </MockedProvider>
    );
    await wait(0);
    wrapper.update();
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.text()).toContain('Cache content');
  });
});
