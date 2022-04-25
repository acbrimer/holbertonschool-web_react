import {
  LOGIN,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

export const login = (data) => ({
  type: LOGIN,
  user: data,
});

export const logout = () => ({ type: LOGOUT });

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
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
  fetch('./login-success.json')
    .then((response) => response.json())
    .then((data) => {
      dispatch(loginSuccess());
      dispatch(login(data));
    })
    .catch(() => dispatch(loginFailure()));
};
