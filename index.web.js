import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/app/App.web';

const wrapper = document.getElementById('app');
wrapper && ReactDOM.render(<App/>, wrapper);
