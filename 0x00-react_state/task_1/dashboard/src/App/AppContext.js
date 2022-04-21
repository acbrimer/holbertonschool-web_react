import React, { createContext } from 'react';

const AppContext = createContext({
  email: '',
  password: '',
  isLoggedIn: false,
  logOut: () => {},
});

export default AppContext;
