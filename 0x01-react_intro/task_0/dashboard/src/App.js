import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">Login to access the full dashboard</main>
      <footer className="App-footer">
        <i>Copyright 2020 - holberton school</i>
      </footer>
    </>
  );
}

export default App;
