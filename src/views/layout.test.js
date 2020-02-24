import React from "react";
import {createShallow} from '@material-ui/core/test-utils';
import {Layout} from './layout';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

describe('Close Targets Layout', () => {
  let wrapper, shallow;

  it('should wrap component with a MuiThemeProvider', () => {
    shallow = createShallow();
    const Foo = <div>Foo</div>;
    wrapper = shallow(<Layout><Foo/></Layout>);
    expect(wrapper.find(MuiThemeProvider).length).toBe(1);
  });

});
