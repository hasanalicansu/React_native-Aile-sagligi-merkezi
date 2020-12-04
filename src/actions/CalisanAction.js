import firebase from 'firebase';
import {
    GET_CALISAN
  } from './types';


  export const calisanGet = () => {
    return (dispatch) => {
        firebase
        .database()
        .ref('/calisanlar')
        .on('value', (data) =>{dispatch({type:GET_CALISAN,payload:data.val()})})//{dispatch({type:GET_BILDIRIM,payload:data})}
    };
  };
  

