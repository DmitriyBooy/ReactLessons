import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import reportWebVitals from './reportWebVitals'
import store from './redux/state'

let root = ReactDOM.createRoot(document.getElementById('root'))

const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        appState={state}
        addPost={store.addPost.bind(store)}
        changeNewPostText={store.changeNewPostText.bind(store)}
      />
    </React.StrictMode>
  )
}

store.subscribe(rerenderEntireTree)

rerenderEntireTree(store.getState())

reportWebVitals();