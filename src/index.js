import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogs = [
  {id: 1, name: 'Дима'},
  {id: 2, name: 'Андрей'},
  {id: 3, name: 'Света'},
  {id: 4, name: 'Саша'},
  {id: 5, name: 'Виктор'},
  {id: 6, name: 'Валера'},
]

const messages = [
  {id: 1, message: 'Привет'},
  {id: 2, message: 'Как дела?'},
  {id: 3, message: 'Yo'},
  {id: 4, message: 'Yo'},
  {id: 5, message: 'Yo'},
]

const postsData = [
  {id: 0, message: 'Hi, how are you', likesCount: 12},
  {id: 1, message: 'It\'s my first post', likesCount: 11}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App messages={messages} dialogs={dialogs} posts={postsData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
