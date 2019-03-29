import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.querySelector('#root')
);
