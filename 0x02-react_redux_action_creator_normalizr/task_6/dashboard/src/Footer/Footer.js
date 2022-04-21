import React from 'react';
import './Footer.css';
import AppContext from '../App/AppContext';

const Footer = () => {
  return (
    <footer id="appFooter" className="App-footer">
      <i>Copyright 2020 - holberton school</i>
      <AppContext.Consumer>
        {({ user }) =>
          user.isLoggedIn && (
            <p id="contactLink">
              <a>Contact us</a>
            </p>
          )
        }
      </AppContext.Consumer>
    </footer>
  );
};

export default Footer;
