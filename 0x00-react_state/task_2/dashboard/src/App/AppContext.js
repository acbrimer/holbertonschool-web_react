import React, { createContext } from 'react';

export const user = { email: '', password: '', isLoggedIn: false };

const AppContext = createContext({
  user,
  logOut: () => {},
});

export default AppContext;
