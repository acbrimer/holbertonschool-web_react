import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('NotificationItem renders without crashing', () => {
    shallow(<NotificationItem />);
  });
});
