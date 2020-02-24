import React from "react";
import {createShallow} from '@material-ui/core/test-utils';
import PortalTopBar from "./PortalTopBar";

describe('PortalTopBar component', () => {
  let wrapper;
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it('should create top bar compoennt', () => {
      wrapper = shallow(<PortalTopBar />);
      expect(wrapper.find('portalTopBar').length).toBe(1)
  })
});
