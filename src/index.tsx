import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
// import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import type {} from 'redux-thunk/extend-redux'
import App from './App'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
    )
)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
