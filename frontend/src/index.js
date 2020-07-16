import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './iniciadores/store';

import firebase from './iniciadores/firebase';
import{setUser} from './iniciadores/actions';
import{clearUser} from './iniciadores/actions';


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(setUser(user));
    
  }else{
    store.dispatch(clearUser());
      }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
