import React from 'react';
import { render } from 'react-dom';

import './style/style.css';

const App = () => {
  return <h1>
    Hello Southtrip!
  </h1>
};

render(
  <App/>,
  document.getElementById('app')
);
