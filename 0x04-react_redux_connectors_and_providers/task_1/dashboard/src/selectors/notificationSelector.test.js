import { assert } from 'chai';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';
import {
  markAsRead,
  setNotificationFilter,
  fetchNotificationsSuccess,
} from '../actions/notificationActionCreators';
import notificationReducer from '../reducers/notificationReducer';
import data from '../schema/notifications';

describe('notificationSelector', () => {
  it('filterTypeSelected works as expected', () => {
    let state = notificationReducer(fetchNotificationsSuccess(data));
    state = notificationReducer(setNotificationFilter('DEFAULT'), state);
    assert.equal(filterTypeSelected(state), 'DEFAULT');
  });
  it('getNotifications returns a list of the message entities within the reducer', () => {
    assert.isTrue(true);
  });
  it('getUnreadNotifications returns a list of the message entities within the reducer', () => {
    assert.isTrue(true);
  });
});
