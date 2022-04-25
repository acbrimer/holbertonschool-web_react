import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';

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

const Header = (props) => {
  const { isLoggedIn, logOut, user } = props;
  return (
    <header className={css(styles.appHeader)}>
      <img src={logo} className={css(styles.appLogo)} alt="logo" />
      <h1 style={{ flexGrow: 1 }}>School dashboard</h1>

      {isLoggedIn && (
        <div id="logoutSection">
          <p>
            Welcome&nbsp;<b>{user.email}</b>&nbsp;
            <a href="#" onClick={logOut}>
              (logout)
            </a>
          </p>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
  user: PropTypes.any,
  logOut: PropTypes.func,
};

Header.defaultProps = {
  isLoggedIn: false,
  user: {},
  logOut: () => {},
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.ui.get('isUserLoggedIn'),
  user: state.ui.get('user'),
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
