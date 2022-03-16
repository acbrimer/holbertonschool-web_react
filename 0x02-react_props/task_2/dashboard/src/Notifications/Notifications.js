import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils';
import NotificationItem from './NotificationItem';

const Notifications = () => {
  const handleCloseClick = () => {
    console.log('Close button has been clicked');
  };
  return (
    <div className="Notifications">
      <button
        onClick={handleCloseClick}
        aria-label="Close"
        style={{
          boxShadow: 'unset',
          position: 'absolute',
          top: 12,
          right: 12,
          background: 'transparent',
          border: 'unset',
        }}
      >
        X
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem
          key="notification_item-0"
          value="New course available"
          type="default"
        />
        <NotificationItem
          key="notification_item-1"
          value="New resume available"
          type="default"
        />
        <NotificationItem
          key="notification_item-2"
          type="urgent"
          html={getLatestNotification()}
        />
      </ul>
    </div>
  );
};

export default Notifications;
