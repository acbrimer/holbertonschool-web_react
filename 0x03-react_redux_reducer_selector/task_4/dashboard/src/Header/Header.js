import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

const styles = StyleSheet.create({
  appHeader: {
    flexGrow: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--holberton-red)',
    borderBottom: '3px solid var(--holberton-red)',
    paddingRight: 8,
  },
  appLogo: {
    flexGrow: 0,
    pointerEvents: 'none',
    height: 200,
    width: 'auto',
  },
});

function Header() {
  return (
    <header className={css(styles.appHeader)}>
      <img src={logo} className={css(styles.appLogo)} alt="logo" />
      <h1 style={{ flexGrow: 1 }}>School dashboard</h1>
      <AppContext.Consumer>
        {({ user, logOut }) =>
          user &&
          user.isLoggedIn && (
            <div id="logoutSection">
              <p>
                Welcome&nbsp;<b>{user.email}</b>&nbsp;
                <a href="#" onClick={logOut}>
                  (logout)
                </a>
              </p>
            </div>
          )
        }
      </AppContext.Consumer>
    </header>
  );
}

export default Header;
