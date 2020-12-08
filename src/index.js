import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer'
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootSaga} from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
