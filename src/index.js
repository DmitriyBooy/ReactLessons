import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import reportWebVitals from './reportWebVitals'
import store from './redux/ReduxStore'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'

let root = ReactDOM.createRoot(document.getElementById('root'))

const rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}

store.subscribe(() => rerenderEntireTree(store.getState()))

rerenderEntireTree(store.getState())

reportWebVitals()