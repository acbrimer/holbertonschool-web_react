import { assert } from 'chai';
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from './uiActionCreators';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

describe('uiActionCreators', () => {
  it('login function returns correct action', () => {
    const action = login('test@email.com', 'pass');
    assert.equal(action.type, LOGIN);
  });
  it('logout function returns correct action', () => {
    const action = logout();
    assert.equal(action.type, LOGOUT);
  });
  it('displayNotificationDrawer function returns correct action', () => {
    const action = displayNotificationDrawer();
    assert.equal(action.type, DISPLAY_NOTIFICATION_DRAWER);
  });
  it('hideNotificationDrawer function returns correct action', () => {
    const action = hideNotificationDrawer();
    assert.equal(action.type, HIDE_NOTIFICATION_DRAWER);
  });
});
