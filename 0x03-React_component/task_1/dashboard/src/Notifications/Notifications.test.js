import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils';

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

describe('<Notifications />', () => {
  it('Notifications renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('Notifications renders three list items', () => {
    const notifications = shallow(
      <Notifications listNotifications={listNotifications} />
    );
    assert.equal(notifications.find(NotificationItem).length, 3);
  });

  it('Notifications renders the text Here is the list of notifications', () => {
    const notifications = shallow(
      <Notifications listNotifications={listNotifications} />
    );
    assert.isTrue(
      notifications.text().includes('Here is the list of notifications')
    );
  });

  it('Notifications.children[0] renders correct node', () => {
    const notifications = shallow(
      <Notifications listNotifications={listNotifications} />
    );
    assert.equal(notifications.find(NotificationItem).length, 3);
  });

  it('Notifications hidden when displayDrawer = false', () => {
    const notifications = shallow(<Notifications displayDrawer={false} />);
    assert.equal(notifications.find('div.hidden').length, 1);
  });

  it('Notifications displays correct empty message', () => {
    const notifications = shallow(<Notifications displayDrawer={false} />);
    notifications.text().includes('No new notification for now');
  });
});
