import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './Notifications.css';
import { getLatestNotification } from '../utils';
import NotificationItem from './NotificationItem';

const Notifications = (props) => {
  const { displayDrawer } = props;
  const handleCloseClick = () => {
    console.log('Close button has been clicked');
  };
  return (
    <div className="notificationsWrapper">
      <div className="menuItem">Your notifications</div>
      <div
        className={clsx('Notifications', {
          ['hidden']: !displayDrawer,
        })}
      >
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
    </div>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: true,
};

export default Notifications;
