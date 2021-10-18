import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FakeServer } from './componentes/FakeServer';

ReactDOM.render(
    <FakeServer>
      <App />
    </FakeServer>,
  document.getElementById('root')
);

reportWebVitals();
