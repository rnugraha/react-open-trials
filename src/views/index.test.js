import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Portal from './index';
import AppRoute from '../routes/AppRoute';

describe('routes', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it('should create routes', () => {
    const wrapper = shallow(<Portal />);
    expect(wrapper.find(AppRoute).length).toBe(3);
    expect(
      wrapper
        .find(AppRoute)
        .at(0)
        .prop('path')
    ).toEqual('/');
    expect(
      wrapper
        .find(AppRoute)
        .at(1)
        .prop('path')
    ).toEqual('/about');
  });
});
