import React from 'react';
import { assert } from 'chai';
import { shallow } from '../../config/setupTests';
import Login from './Login';

describe('<Login />', () => {
  it('Login component renders without crashing', () => {
    shallow(<Login />);
  });
  it('Component renders 2 input tags and 2 label tags', () => {
    const login = shallow(<Login />);
    assert.equal(login.find('input').length, 3);
    assert.equal(login.find('label').length, 2);
  });
  it('Submit button is disabled by default', () => {
    const login = shallow(<Login />);
    expect(login.find('input').at(2).prop('disabled')).toEqual(true);
  });
});
