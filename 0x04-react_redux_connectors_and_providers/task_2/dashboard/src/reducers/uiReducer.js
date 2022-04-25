import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOGIN,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from '../actions/uiActionTypes';
import { Map } from 'immutable';

export const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state.set('isUserLoggedIn', true);
    case LOGIN_FAILURE:
      return state.set('isUserLoggedIn', false);
    case LOGIN:
      return state.set('user', action.user);
    case LOGOUT:
      return state.withMutations((s) =>
        s.set('isUserLoggedIn', false).set('user', {})
      );
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);
    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);
    default:
      return state;
  }
};
