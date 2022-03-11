import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('App renders without crashing', () => {
    shallow(<App />);
  });
  it('App renders a div with the class App-header', () => {
    const app = shallow(<App />);
    assert.isTrue(app.find('header').hasClass('App-header'));
  });
  it('App renders a div with the class App-body', () => {
    const app = shallow(<App />);
    assert.isTrue(app.find('main').hasClass('App-body'));
  });
  it('App renders a div with the class App-footer', () => {
    const app = shallow(<App />);
    assert.isTrue(app.find('footer').hasClass('App-footer'));
  });
});
