import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';

const store = createStore(rootReducer);

ReactDOM.render(<App />, document.getElementById('root'));
)
registerServiceWorker();