import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

function App(props) {
  const { isLoggedIn } = props;
  return (
    <>
      <Notifications />
      <Header />
      <main className="App-body">
        {isLoggedIn ? <CourseList /> : <Login />}
      </main>
      <Footer />
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: true,
};

export default App;
