import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import reportWebVitals from './reportWebVitals'
import store from './redux/store'

let root = ReactDOM.createRoot(document.getElementById('root'))

const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        appState={state}
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>
  )
}

store.subscribe(rerenderEntireTree)

rerenderEntireTree(store.getState())

reportWebVitals();