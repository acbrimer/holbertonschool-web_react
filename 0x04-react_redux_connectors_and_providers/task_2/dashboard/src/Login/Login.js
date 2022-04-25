import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  fieldWrapper: {
    display: 'inline-flex',
    flexDirection: 'row',
    width: '100%',
  },
  label: {
    flexGrow: 0,
  },
  input: {
    marginLeft: 8,
    flexGrow: 1,
    border: 'none',
  },
  loginBtn: {
    border: '3px solid rgb(240,194,130)',
    borderRadius: 2,
    backgroundColor: '#FFF',
    width: 40,
  },
});

const Login = (props) => {
  const { logIn } = props;
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [enableSubmit, setEnableSubmit] = React.useState(false);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    logIn(email, password);
  };

  React.useLayoutEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setEnableSubmit(true);
    } else {
      setEnableSubmit(false);
    }
  }, [email, password]);
  return (
    <section key="login" id="section_login">
      <p>Login to access the full dashboard</p>
      <form onSubmit={handleLoginSubmit} className={css(styles.form)}>
        <div className={css(styles.fieldWrapper)}>
          <label className={css(styles.label)} htmlFor="email">
            Email:
          </label>
          <input
            value={email}
            onChange={handleChangeEmail}
            className={css(styles.input)}
            id="email"
            type="email"
          />
        </div>

        <div className={css(styles.fieldWrapper)}>
          <label className={css(styles.label)} htmlFor="password">
            Password:
          </label>
          <input
            value={password}
            onChange={handleChangePassword}
            className={css(styles.input)}
            id="password"
            type="password"
          />
        </div>

        <input
          disabled={!enableSubmit}
          className={css(styles.loginBtn)}
          type="submit"
          value="OK"
        />
      </form>
    </section>
  );
};

Login.propTypes = {
  logIn: PropTypes.func,
};

export default Login;
