import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './index.css';

import {register} from './serviceWorker';
import Root from './router/routers';

const mountNode = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
  mountNode
);

register();
