import React from 'react';
import { Counter } from './counter';

describe('AppComponent', () => {
  it('should render', () => {
    const comp = shallow(<Counter />);

    expect(comp.find('h1').length).toBe(1);
  });
});
