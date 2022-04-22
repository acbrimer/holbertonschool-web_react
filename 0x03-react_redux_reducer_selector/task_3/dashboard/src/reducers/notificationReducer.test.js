import { assert } from 'chai';
import {
  markAsRead,
  setNotificationFilter,
  fetchNotificationsSuccess,
} from '../actions/notificationActionCreators';
import notificationReducer, {
  initialState,
  defaultData,
} from './notificationReducer';

describe('courseReducer', () => {
  it('Default state returns an empty array', () => {
    const state = notificationReducer({ type: null }, initialState);
    assert.deepEqual(state, initialState);
  });
  it('FETCH_NOTIFICATIONS_SUCCESS updates state correctly', () => {
    let state = notificationReducer(
      fetchNotificationsSuccess(defaultData),
      initialState
    );
    assert.deepEqual(
      state.data,
      defaultData.map((d) => ({ ...d, isRead: false }))
    );
  });
  it('MARK_AS_READ updates correct notification', () => {
    let state = notificationReducer(
      fetchNotificationsSuccess(defaultData),
      initialState
    );
    state = notificationReducer(markAsRead(1), state);
    assert.isTrue(state.data[1].isRead);
  });
  it('SET_TYPE_FILTER updates state with correct NotificationTypeFilters', () => {
    let state = notificationReducer(
      fetchNotificationsSuccess(defaultData),
      initialState
    );
    state = notificationReducer(setNotificationFilter('DEFAULT'), state);
    assert.equal(state.filter, 'DEFAULT');
  });
});
