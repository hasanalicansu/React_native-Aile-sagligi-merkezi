import {Alert} from 'react-native';
//import {Actions} from "react-native-router-flux";
import * as RooterNavigation from '../RooterNavigation.js';

import {
  SEND_DOGUM_TAKVIM,
  SEND_ASI_BILGI
  } from './types';


  export const asiTakvimChanged = (day) => {
    return (dispatch) => {
      dispatch({
        type: SEND_DOGUM_TAKVIM,
        payload: day,
      });
      
    };
  };
  
  export const sendTarih=(day)=>{
    return(dispatch)=>{
      dispatch({
        type:SEND_ASI_BILGI
      });
       if (day.day === '') {
        Alert.alert(
            "Mesaj",
            "Tüm alanlar dolu olmalıdıe"[{text:"tamam",onPress:()=>null}]

        )
      }else{
        RooterNavigation.navigate('asiGiris')
       
      }
      
    }
  }


