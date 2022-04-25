import { assert } from 'chai';
import {
  markAsRead,
  setNotificationFilter,
  fetchNotificationsSuccess,
} from '../actions/notificationActionCreators';
import notificationReducer, { initialState } from './notificationReducer';
import data from '../schema/notifications';

describe('notificationReducer', () => {
  it('Default state returns an empty array', () => {
    const state = notificationReducer({ type: null }, initialState);
    assert.deepEqual(state.toJS(), initialState.toJS());
  });
  it('FETCH_NOTIFICATIONS_SUCCESS updates state correctly', () => {
    let testData = fetchNotificationsSuccess(data);
    let state = notificationReducer(testData, initialState);
    assert.deepEqual(Object.keys(state.toJS()), [
      'notifications',
      'messages',
      'users',
    ]);
  });
  it('MARK_AS_READ updates correct notification', () => {
    let state = notificationReducer(
      fetchNotificationsSuccess(data),
      initialState
    );
    state = notificationReducer(markAsRead(1), state);
    assert.isTrue(
      state.toJS().notifications.data[state.toJS().notifications.ids[1]].isRead
    );
  });
  it('SET_TYPE_FILTER updates state with correct NotificationTypeFilters', () => {
    let state = notificationReducer(
      fetchNotificationsSuccess(data),
      initialState
    );
    state = notificationReducer(setNotificationFilter('DEFAULT'), state);
    assert.equal(state.getIn(['notifications', 'filter']), 'DEFAULT');
  });
});
