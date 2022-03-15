import React from 'react';
import { render } from 'react-dom';
import App from './App/App';
import Notifications from './Notifications/Notifications';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

render(<Notifications />, document.getElementById('root-notifications'));
