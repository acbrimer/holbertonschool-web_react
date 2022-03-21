import React from 'react';

function NotificationItem(props) {
  const { id, type, html, value, markAsRead } = props;

  return html ? (
    <li
      onClick={() => markAsRead(id)}
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
      className={type === 'urgent' ? 'priority-urgent' : 'priority-default'}
    ></li>
  ) : (
    <li
      data-notification-type={type}
      className={type === 'urgent' ? 'priority-urgent' : 'priority-default'}
    >
      {value}
    </li>
  );
}

export default NotificationItem;
