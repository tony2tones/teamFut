import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { getFirestore } from 'redux=firestore';
import { getFirestore } from 'react-redux-firebase';

const store = createStore(rootReducer,applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
