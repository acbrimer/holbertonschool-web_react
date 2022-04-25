import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { getLatestNotification } from '../utils';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import AppContext, { user } from './AppContext';

const GLOBALS = '__GLOBAL_STYLES__';

const globalExtension = {
  selectorHandler: (selector, baseSelector, generateSubtreeStyles) =>
    baseSelector.includes(GLOBALS) ? generateSubtreeStyles(selector) : null,
};

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

const extended = StyleSheet.extend([globalExtension]);
const globalStyles = extended.StyleSheet.create({
  [GLOBALS]: {
    body: {
      margin: 0,
      overflow: 'hidden',
      fontFamily: 'Arial, Helvetica, sans-serif',
      '--holberton-red': '#e0003c',
      '--default-blue': 'rgb(0, 0, 255)',
    },
    'div#root': {
      backgroundColor: '#fff',
      height: 'calc(100vw - 16px)',
      display: 'flex',
      flexDirection: 'column',
    },
  },
});

const styles = StyleSheet.create({
  appBody: {
    flexGrow: 1,
    padding: 24,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    extended.css(globalStyles[GLOBALS]);
    this.state = {
      displayDrawer: props.displayDrawer,
      user: { ...user, isLoggedIn: props.isLoggedIn },
      listNotifications: listNotifications,
    };

    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  markNotificationAsRead(id) {
    this.setState({
      ...this.state,
      listNotifications: this.state.listNotifications.filter(
        (n) => n.id !== id
      ),
    });
  }

  logIn(email, password) {
    this.setState({
      ...this.state,
      user: { email, password, isLoggedIn: true },
    });
  }

  logOut() {
    this.setState({
      ...this.state,
      user: user,
    });
  }

  handleKeydown(event) {
    const { key, ctrlKey } = event;
    if (ctrlKey && key === 'h') {
      window.alert('Logging you out');
      this.logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ ...this.state, displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ ...this.state, displayDrawer: false });
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          user: this.state.user,
          listNotifications: this.state.listNotifications,
          logOut: this.logOut,
          markNotificationAsRead: this.markNotificationAsRead,
        }}
      >
        <Notifications
          markNotificationAsRead={this.markNotificationAsRead}
          listNotifications={this.state.listNotifications}
          displayDrawer={this.props.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <Header />
        <main className={css(styles.appBody)}>
          {this.state.user.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.logIn} />
            </BodySectionWithMarginBottom>
          )}
          <BodySectionWithMarginBottom title="News from the School">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu
              erat eget urna mattis volutpat. In eu malesuada purus, eget mollis
              lectus. Donec vitae elit et ipsum lobortis porttitor. Proin felis
              arcu, sagittis sit amet massa ac, consectetur hendrerit leo. Sed
              tempor eros ac ligula tempor convallis. Ut nec luctus turpis. Sed
              hendrerit imperdiet nulla.
            </p>
          </BodySectionWithMarginBottom>
        </main>
        <Footer />
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
  displayDrawer: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  displayDrawer: false,
};

export const mapStateToProps = (state) => ({
  isLoggedIn: state.ui.get('isUserLoggedIn'),
  displayDrawer: state.ui.get('isNotificationDrawerVisible'),
});

export default connect(mapStateToProps)(App);
