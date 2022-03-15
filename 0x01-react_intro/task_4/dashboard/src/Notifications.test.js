import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('Notifications renders without crashing', () => {
    shallow(<Notifications />);
  });
  it('Notifications renders three list items', () => {
    const notifications = shallow(<Notifications />);
    assert.equal(notifications.find('li').length, 3);
  });

  it('Notifications renders the text Here is the list of notifications', () => {
    const notifications = shallow(<Notifications />);
    assert.isTrue(
      notifications.text().includes('Here is the list of notifications')
    );
  });
});