import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from '../actions/uiActionTypes';

export const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

export default (action, state = initialState) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isUserLoggedIn: true };
    case LOGIN_FAILURE:
      return { ...state, isUserLoggedIn: false };
    case LOGOUT:
      return { ...state, user: {}, isUserLoggedIn: false };
    case DISPLAY_NOTIFICATION_DRAWER:
      return { ...state, isNotificationDrawerVisible: true };
    case HIDE_NOTIFICATION_DRAWER:
      return { ...state, isNotificationDrawerVisible: false };
    default:
      return state;
  }
};
