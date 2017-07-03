import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBHaD4S9tfE60D6Fb5ekgVxS1XutBB9yhU',
      authDomain: 'manager-80fd4.firebaseapp.com',
      databaseURL: 'https://manager-80fd4.firebaseio.com',
      projectId: 'manager-80fd4',
      storageBucket: 'manager-80fd4.appspot.com',
      messagingSenderId: '371989994658'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
