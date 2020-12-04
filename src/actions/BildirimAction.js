import firebase from 'firebase';
import {
    GET_BILDIRIM
  } from './types';


  export const bildirimGet = () => {
    return (dispatch) => {
        firebase
        .database()
        .ref('/bildirim')
        .on('value', (data) =>{dispatch({type:GET_BILDIRIM,payload:data.val()})})//{dispatch({type:GET_BILDIRIM,payload:data})}
    };
  };
  

