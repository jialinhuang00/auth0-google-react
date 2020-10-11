import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Auth from './Auth'

const auth = new Auth()

let state = {}
let initState = {
  name: 'jia0',
  location: window.location.pathname.replace(/^\/?|\/$/g, ''),
  auth: auth
}

window.setState = (changes) => {
  state = Object.assign({}, state, changes)
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}


window.setState(initState);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();