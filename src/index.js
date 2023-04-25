import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import reportWebVitals from './reportWebVitals'
import state, { addPost, changeNewPostText, subscribe } from './redux/state'

let root = ReactDOM.createRoot(document.getElementById('root'))

const rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <App
        appState={state}
        addPost={addPost}
        changeNewPostText={changeNewPostText}
      />
    </React.StrictMode>
  )
}

subscribe(rerenderEntireTree)

rerenderEntireTree(state)

reportWebVitals();