import React from 'react';

function NotificationItem(props) {
  const { type, html, value } = props;
  return html ? (
    <li
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
