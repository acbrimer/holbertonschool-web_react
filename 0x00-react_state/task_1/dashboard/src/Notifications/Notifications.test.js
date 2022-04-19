import React from 'react';
import { assert } from 'chai';
import { shallow } from '../../config/setupTests';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils';

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
describe('<Notifications />', () => {
  beforeEach(() => {
    consoleSpy.mockClear();
  });
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

  it('Notifications correctly handles markAsRead', () => {
    const notifications = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    notifications.instance().markAsRead(1);
    expect(console.log).toBeCalledTimes(1);
  });

  it('Notifications does not rerender on same props', () => {
    const renderSpy = jest.spyOn(Notifications.prototype, 'render');

    const notifications = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    notifications.setProps({ listNotifications: listNotifications });
    expect(renderSpy).toBeCalledTimes(1);
  });

  it('Notifications rerenders with new listNotifications', () => {
    const renderSpy = jest.spyOn(Notifications.prototype, 'render');
    const notifications = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    notifications.setProps({
      listNotifications: [
        ...listNotifications,
        { id: 4, type: 'default', value: 'Another notification' },
      ],
    });
    expect(renderSpy).toBeCalledTimes(3);
  });
});
