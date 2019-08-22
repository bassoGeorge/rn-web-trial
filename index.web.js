import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/modules/demo/components/app/App.web';
import {EnvConfig} from './src/env-config';

EnvConfig.init("WEB", "/api");

const wrapper = document.getElementById('app');
wrapper && ReactDOM.render(<App/>, wrapper);
