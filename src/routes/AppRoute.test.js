import React from "react";
import AppRoute from './AppRoute';
import {createShallow} from '@material-ui/core/test-utils';

const aComponent = () => (<div>A Component</div>);
const aLayout = () => (<div>A Layout</div>);

describe('AppRoute', () => {
  let wrapper, shallow;

  it('should wrap a component with Route', () => {
    shallow = createShallow();
    wrapper = shallow(<AppRoute component={aComponent} layout={aLayout}/>);
    expect(wrapper.find('Route').length).toBe(1);
  });
});
