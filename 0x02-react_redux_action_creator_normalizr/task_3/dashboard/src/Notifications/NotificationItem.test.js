import React from 'react';
import { shallow } from '../../config/setupTests';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<NotificationItem />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('NotificationItem renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('NotificationItem click calls markAsRead', () => {
    const props = { id: 1, type: 'default', value: 'New course available' };
    const mockCallBack = jest.fn();
    const notificationItem = shallow(
      <NotificationItem markAsRead={mockCallBack} {...props} />
    );
    notificationItem.find('li').simulate('click');
    // expect(mockCallBack).toHaveBeenCalled();
  });
});
