import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import store from './store'

import './css/index.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
