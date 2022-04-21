import React from 'react';
import { assert } from 'chai';
import { StyleSheetTestUtils } from 'aphrodite';
import { shallow } from '../../config/setupTests';
import Login from './Login';

describe('<Login />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Login component renders without crashing', () => {
    shallow(<Login />);
  });
  it('Component renders 2 input tags and 2 label tags', () => {
    const login = shallow(<Login />);
    assert.equal(login.find('input').length, 3);
    assert.equal(login.find('label').length, 2);
  });
});
