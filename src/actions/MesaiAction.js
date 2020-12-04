import firebase from 'firebase';
import {
    GET_MESAI
  } from './types';


  export const mesaiGet = () => {
    return (dispatch) => {
        firebase
        .database()
        .ref('/mesai')
        .on('value', (data) =>{dispatch({type:GET_MESAI,payload:data.val()})})//{dispatch({type:GET_BILDIRIM,payload:data})}
    };
  };
  
