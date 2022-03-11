import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';

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
        {[
          'New course available',
          'New resume available',
          getLatestNotification(),
        ].map((str, ix) => (
          <li
            dangerouslySetInnerHTML={{ __html: str }}
            className={ix === 0 ? 'priority-default' : 'priority-urgent'}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
