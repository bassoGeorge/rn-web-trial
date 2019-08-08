import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/web/App';

const wrapper = document.getElementById('app');
wrapper && ReactDOM.render(<App/>, wrapper);
