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
      apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      authDomain: 'saglikv2.firebaseapp.com',
      databaseURL: 'https://saglikv2.firebaseio.com',
      projectId: 'saglikv2',
      storageBucket: 'saglikv2.appspot.com',
      messagingSenderId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      appId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      measurementId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
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
