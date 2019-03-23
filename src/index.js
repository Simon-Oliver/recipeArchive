import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import store from './store/index';
import { addRecipe } from './actions';

window.store = store;
window.addRecipe = addRecipe;

ReactDOM.render(<App />, document.querySelector('#root'));
