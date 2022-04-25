import {
  LOGIN,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password },
});

export const logout = () => ({ type: LOGOUT });

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  data,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

export const loginRequest = (email, password) => async (dispatch) => {
  dispatch(login(email, password));
  fetch('./login-success.json')
    .then((response) => response.json())
    .then((data) => dispatch(loginSuccess(data)))
    .catch(() => dispatch(loginFailure()));
};
