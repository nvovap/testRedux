import React from 'react';
import {render} from 'react-dom';
// import './index.css';

import {compose, createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import createSagaMiddleware from "redux-saga";

import App from './App';
import rootReducer from './redux/rootReducer';
import reportWebVitals from './reportWebVitals';

import { forbiddenWordsMiddleware } from "./redux/middleware";
import { sagaWatcher } from "./redux/saga";

const saga = createSagaMiddleware()

const store = createStore(rootReducer,
  compose( applyMiddleware(saga, thunk, logger, forbiddenWordsMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

saga.run(sagaWatcher)

render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
