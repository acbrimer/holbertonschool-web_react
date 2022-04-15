/**
 * @jest-environment jsdom
 */
import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('<WithLogging />', () => {
  it('console.log was called on mount and on unmount with Component when the wrapped element is pure htm', () => {
    const logSpy = jest.spyOn(console, 'log');
    const TestComp = WithLogging(() => <p>hello</p>);
    const m = mount(<TestComp />);
    expect(logSpy).toHaveBeenCalledWith('Component Component is mounted');
    m.unmount();
    expect(logSpy).toHaveBeenCalledWith(
      'Component Component is going to unmount'
    );
  });

  it('console.log was called on mount and on unmount with Login', () => {
    const logSpy = jest.spyOn(console, 'log');
    const TestComp = WithLogging(Login);
    const m = mount(<TestComp />);
    expect(logSpy).toHaveBeenCalledWith('Component Login is mounted');
    m.unmount();
    expect(logSpy).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});
