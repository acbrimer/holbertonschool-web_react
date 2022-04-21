import { assert } from 'chai';
import {
  markAsRead,
  setNotificationFilter,
} from './notificationActionCreators';
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from './notificationActionTypes';

describe('notificationActionCreators', () => {
  it('markAsRead returns correct action', () => {
    const action = markAsRead(1);
    assert.equal(action.type, MARK_AS_READ);
  });
  it('setNotificationFilter returns correct action', () => {
    const action = setNotificationFilter('DEFAULT');
    assert.equal(action.type, SET_TYPE_FILTER);
    assert.equal(action.filter, NotificationTypeFilters['DEFAULT']);
  });
});
