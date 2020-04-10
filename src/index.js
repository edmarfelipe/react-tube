import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { combineReducers } from 'redux'

import { resultReducer } from 'pages/Results/reducer'
import { themeReducer } from 'pages/Layout/reducer'
import { homeReducer } from 'pages/Home/reducer'

const rootReducer = combineReducers({
  resultReducer,
  themeReducer,
  homeReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
