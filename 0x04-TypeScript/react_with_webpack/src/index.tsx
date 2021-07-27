import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.json';

const App = (props: { name: string }) => {
  const { name } = props;
  return <h1>Hello, {name}!</h1>;
};

ReactDOM.render(<App {...data} />, document.getElementById('root'));
