import React from 'react';
import { Form } from './form';

describe('AppComponent', () => {
  it('should render', () => {
    const comp = shallow(<Form />);

    expect(comp.find('h1').length).toBe(1);
  });
});
