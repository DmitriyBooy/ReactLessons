import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))

const postsData = [
  {
    id: 1,
    message: 'Пиривет пиривет',
    likesCount: 2,
  },
  {
    id: 2,
    message: 'Ыть тыгыдым',
    likesCount: 4,
  },
]

const dialogsData = [
  {
    id: 1,
    name: 'Дима'
  },
  {
    id: 2,
    name: 'Катя'
  },
  {
    id: 3,
    name: 'Шампиньон'
  },
]

const messagesData = [
  {
    id: 1,
    message: 'Пиривиривет'
  },
  {
    id: 2,
    message: 'Ыть'
  },
  {
    id: 3,
    message: 'А тут, тыгыдым'
  },
]

root.render(
  <React.StrictMode>
    <App
      posts={postsData}
      dialogs={dialogsData}
      messages={messagesData}
    />
  </React.StrictMode>
);

reportWebVitals();
