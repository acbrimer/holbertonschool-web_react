import React from 'react';
import { render } from 'react-dom';
import App from './App/App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

// using configureStore instead of createStore
const store = configureStore({ reducer });

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

