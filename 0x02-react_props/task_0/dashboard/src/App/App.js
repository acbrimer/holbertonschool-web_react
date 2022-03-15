import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

function App() {
  return (
    <>
      <Notifications />
      <Header />
      <main className="App-body">
        <Login />
      </main>
      <Footer />
    </>
  );
}

export default App;
