import React from 'react';
import { assert, expect } from 'chai';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

describe('<App />', () => {
  it('App renders without crashing', () => {
    shallow(<App />);
  });
  it('App contains Notifications component', () => {
    const app = shallow(<App />);
    assert.equal(app.find(Notifications).length, 1);
  });
  it('App contains Header component', () => {
    const app = shallow(<App />);
    assert.equal(app.find(Header).length, 1);
  });
  it('App contains Login component', () => {
    const app = shallow(<App />);
    assert.equal(app.find(Login).length, 1);
  });
  it('App contains Footer component', () => {
    const app = shallow(<App />);
    assert.equal(app.find(Footer).length, 1);
  });
  it('App does not render CourseList by default', () => {
    const app = shallow(<App />);
    expect(app.exists(CourseList)).to.equal(false);
  });
  it('App renders CourseList when isLoggedIn === true', () => {
    const app = shallow(<App isLoggedIn />);
    expect(app.exists(CourseList)).to.equal(true);
    expect(app.exists(Login)).to.equal(false);
  });
});
