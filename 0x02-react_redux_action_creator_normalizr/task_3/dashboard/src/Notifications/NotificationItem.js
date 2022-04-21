import React from 'react';

function NotificationItem(props) {
  const { id, type, html, value, markAsRead, class_urgent, class_default } =
    props;

  return html ? (
    <li
      onClick={() => markAsRead(id)}
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
      className={type === 'urgent' ? class_urgent : class_default}
    ></li>
  ) : (
    <li
      data-notification-type={type}
      className={type === 'urgent' ? class_urgent : class_default}
    >
      {value}
    </li>
  );
}

export default NotificationItem;
