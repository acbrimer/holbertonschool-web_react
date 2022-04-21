import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const opacityFrames = {
  from: {
    opacity: 0.5,
  },
  to: {
    opacity: 1,
  },
};

const bounceFrames = {
  '0%': {
    transform: 'translateY(0px)',
  },
  '33%': {
    transform: 'translateY(-5px)',
  },
  '66%': {
    transform: 'translateY(0px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  },
};
const styles = StyleSheet.create({
  notificationsWrapper: {
    marginRight: 32,
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    alignSelf: 'flex-end',
    maxWidth: '40%',
  },
  menuItem: {
    justifyContent: 'flex-end',
    width: '100%',
    display: 'inline-flex',
    ':hover': {
      animationName: [bounceFrames, opacityFrames],
      animationDuration: '600ms, 600ms',
      animationIterationCount: 'infinite',
    },
  },
  notifications: {
    position: 'relative',
    padding: 12,
    border: '1px dashed var(--holberton-red)',
    width: '100%',
  },
  hidden: {
    display: 'none',
  },
  priorityUrgent: {
    color: 'var(--holberton-red)',
  },
  priorityDefault: {
    color: 'var(--default-blue)',
  },
});

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return (
      (this.props.listNotifications || []).length <
        (nextProps.listNotifications || []).length ||
      this.props.displayDrawer !== nextProps.displayDrawer
    );
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleHideDrawer,
      handleDisplayDrawer,
    } = this.props;
    const handleCloseClick = () => {
      handleHideDrawer();
    };
    return (
      <div className={css(styles.notificationsWrapper)}>
        <div onClick={handleDisplayDrawer} className={css(styles.menuItem)}>
          Your notifications
        </div>
        <div
          className={clsx(css(styles.notifications), {
            [css(styles.hidden)]: !displayDrawer,
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
                  class_urgent={css(styles.priorityUrgent)}
                  class_default={css(styles.priorityDefault)}
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
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;
