import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBOPur6ZDhGykTXS3rt-D3-6_ivp-x4Hnk',
      authDomain: 'react-native-manager-5958f.firebaseapp.com',
      databaseURL: 'https://react-native-manager-5958f.firebaseio.com',
      projectId: 'react-native-manager-5958f',
      storageBucket: 'react-native-manager-5958f.appspot.com',
      messagingSenderId: '569403961063'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
