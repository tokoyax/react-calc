import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CalculatorContainer from './containers/CalculatorContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <CalculatorContainer />,
  document.getElementById('root')
);
registerServiceWorker();
