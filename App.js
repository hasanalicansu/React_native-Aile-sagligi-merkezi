/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import RouterComponent from './src/Rooter';
import React, { Component } from 'react'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/reducer';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';



class App extends Component {

  UNSAFE_componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyDKOViWto_7kvsEMUtezD4EruUWGjxLav4',
      authDomain: 'saglikv2.firebaseapp.com',
      databaseURL: 'https://saglikv2.firebaseio.com',
      projectId: 'saglikv2',
      storageBucket: 'saglikv2.appspot.com',
      messagingSenderId: '1052232709989',
      appId: '1:1052232709989:web:81773ad365bc3c48a8538c',
      measurementId: 'G-W7D2KV9VXC',
    });
   }
  
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        
        <RouterComponent></RouterComponent>
      </Provider>
    );
        
  }
}

export default App;
