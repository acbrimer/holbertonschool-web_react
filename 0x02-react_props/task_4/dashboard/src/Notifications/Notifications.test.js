import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  it('Notifications renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('Notifications renders three list items', () => {
    const notifications = shallow(<Notifications />);
    assert.equal(notifications.find(NotificationItem).length, 3);
  });

  it('Notifications renders the text Here is the list of notifications', () => {
    const notifications = shallow(<Notifications />);
    assert.isTrue(
      notifications.text().includes('Here is the list of notifications')
    );
  });

  it('Notifications.children[0] renders correct node', () => {
    const notifications = shallow(<Notifications />);
    assert.equal(notifications.find(NotificationItem).length, 3);
  });

  it('Notifications hidden when displayDrawer = false', () => {
    const notifications = shallow(<Notifications displayDrawer={false} />);
    assert.equal(notifications.find('div.hidden').length, 1);
  });
});
