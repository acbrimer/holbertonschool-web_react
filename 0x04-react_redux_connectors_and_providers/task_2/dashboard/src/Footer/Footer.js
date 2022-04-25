import React from 'react';
import './Footer.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Footer = (props) => {
  const { isLoggedIn } = props;
  return (
    <footer id="appFooter" className="App-footer">
      <i>Copyright 2020 - holberton school</i>
      {isLoggedIn && (
        <p id="contactLink">
          <a>Contact us</a>
        </p>
      )}
    </footer>
  );
};

Footer.propTypes = {
  isLoggedIn: PropTypes.bool,
};

Footer.defaultProps = {
  isLoggedIn: false,
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.ui.get('isUserLoggedIn'),
});

export default connect(mapStateToProps)(Footer);
