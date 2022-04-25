/**
 * @jest-environment jsdom
 */
import React from 'react';
import { assert, expect } from 'chai';
import { shallow, mount } from '../../config/setupTests';
import { StyleSheetTestUtils } from 'aphrodite';
import { Map } from 'immutable';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers';
import App, { mapStateToProps } from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

const store = configureStore({ reducer });

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const AppStoreWrapper = (props) => (
  <Provider store={props.store}>{props.children}</Provider>
);

describe('<App />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('App renders without crashing', () => {
    shallow(<AppWithStore />);
  });
  it('App contains Notifications component', () => {
    const app = mount(<AppWithStore />);
    assert.equal(app.find(Notifications).length, 1);
  });
  it('App contains Header component', () => {
    const app = mount(<AppWithStore />);
    assert.equal(app.find(Header).length, 1);
  });
  it('App contains Login component', () => {
    const app = mount(<AppWithStore />);
    assert.equal(app.find(Login).length, 1);
  });
  it('App contains Footer component', () => {
    const app = mount(<AppWithStore />);
    assert.equal(app.find(Footer).length, 1);
  });
  it('App does not render CourseList by default', () => {
    const app = mount(<AppWithStore />);
    expect(app.exists(CourseList)).to.equal(false);
  });
  it('App renders CourseList when isLoggedIn === true', () => {
    const app = shallow(<App />, {
      wrappingComponent: AppStoreWrapper,
      wrappingComponentProps: { store: store },
    });
    app.instance().logIn('email@email.com', 'password');
    assert.equal(app.find(CourseList).length, 1);
    assert.equal(app.find(Login).length, 0);
  });
  it('App stores correct user email when logged in', () => {
    const app = mount(<App />, {
      wrappingComponent: AppStoreWrapper,
      wrappingComponentProps: { store: store },
    });
    app.instance().logIn('email@email.com', 'password');
    expect(app.state().user.email).to.equal('email@email.com');
  });
  it('App updates user when logged out called', () => {
    const app = shallow(<App />, { wrappingComponent: AppStoreWrapper });
    app.logIn('email@email.com', 'password');
    app.instance().logOut();
    expect(app.state().user.isLoggedIn).to.equal(false);
    expect(app.state().user.email).to.equal('');
  });
  it('App logs out when control+h keys pressed', () => {
    const map = {};
    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    window.alert = () => {};
    const app = shallow(<App />, { wrappingComponent: AppStoreWrapper });
    map.keydown({ key: 'h', ctrlKey: true });
    assert.isFalse(app.state().user.isLoggedIn);
  });
  it('markNotificationAsRead works as intended', () => {
    const app = shallow(<App />, { wrappingComponent: AppStoreWrapper });
    const initialNotifications = app.state().listNotifications.length;

    app.instance().markNotificationAsRead(1);

    expect(app.state().listNotifications.length).to.equal(
      initialNotifications - 1
    );
  });
});

describe('App.mapStateToProps', () => {
  it('mapStateToProps maps state to props', () => {
    let state = {
      ui: Map({
        isUserLoggedIn: true,
      }),
    };
    const mappedState = mapStateToProps(state);
    assert.isTrue(mappedState.isLoggedIn);
  });
});
