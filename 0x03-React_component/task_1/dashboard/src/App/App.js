import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { getLatestNotification } from '../utils';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  handleKeydown(event) {
    const { key, ctrlKey } = event;
    if (ctrlKey && key === 'h') {
      window.alert('Logging you out');
      this.props.logOut();
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  render() {
    return (
      <>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={this.props.displayDrawer}
        />
        <Header />
        <main className="App-body">
          {this.props.isLoggedIn ? (
            <CourseList listCourses={listCourses} />
          ) : (
            <Login />
          )}
        </main>
        <Footer />
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  logOut: () => {},
};

export default App;
