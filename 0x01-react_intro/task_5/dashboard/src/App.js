import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <>
      <div id="root-notifications"></div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label for="email">Email: </label>
          <input id="email" type="email" />
          &nbsp; &nbsp;
          <label for="password">Password: </label>
          <input id="password" type="password" />
          &nbsp; &nbsp;
          <input type="submit" value="OK" />
        </form>
      </main>
      <footer className="App-footer">
        <i>Copyright 2020 - holberton school</i>
      </footer>
    </>
  );
}

export default App;
