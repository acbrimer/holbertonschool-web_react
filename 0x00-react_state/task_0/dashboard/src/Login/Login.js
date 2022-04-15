import React from 'react';
import { StyleSheet, css } from 'aphrodite';

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

function Login() {
  return (
    <section key="login" id="section_login">
      <p>Login to access the full dashboard</p>
      <form className={css(styles.form)}>
        <div className={css(styles.fieldWrapper)}>
          <label className={css(styles.label)} htmlFor="email">
            Email:
          </label>
          <input className={css(styles.input)} id="email" type="email" />
        </div>

        <div className={css(styles.fieldWrapper)}>
          <label className={css(styles.label)} htmlFor="password">
            Password:
          </label>
          <input className={css(styles.input)} id="password" type="password" />
        </div>

        <input className={css(styles.loginBtn)} type="submit" value="OK" />
      </form>
    </section>
  );
}

export default Login;
