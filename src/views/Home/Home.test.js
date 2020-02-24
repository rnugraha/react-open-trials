import React from 'react';
import { createMount, createShallow } from '@material-ui/core/test-utils';
import Home from './Home';
import styles from './Home.styles';

describe('Portal Home', () => {
  let wrapper;
  let render;
  let props;

  const factory = () => {
    return render(<Home classes={styles} {...props} />);
  };

  beforeAll(() => {
    render = createMount();
    props = {
      classes: {}
    };
  });

  beforeEach(() => {
    wrapper = factory();
  });

  it('should render Portal Home', () => {
    expect(wrapper.find('Home').length).toBe(1);
    expect(wrapper.find('WithStyles(ForwardRef(AppBar))').length).toBe(1);
    expect(wrapper.find('ListItemLink').length).toBe(6);
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
  });

  it('should update input value when text is entered into input', () => {
    wrapper.find('input').simulate('change', { target: { value: 'text' } });
    expect(wrapper.find('input').props().value).toEqual('text');
  });
});
