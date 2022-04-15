import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
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
            {listNotifications.length === 0 ? (
              <li>No new notification for now</li>
            ) : (
              listNotifications.map((notification) => (
                <NotificationItem
                  key={`notification-${notification.id}`}
                  markAsRead={this.markAsRead}
                  {...notification}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
};

export default Notifications;
