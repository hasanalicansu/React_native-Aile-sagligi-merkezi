import firebase from 'firebase';
import _ from 'lodash';
import {
  NAME_CHANGED,
  SURNAME_CHANGED,
  TALEP_TEXT_CHANGED,
  SEND_TALEP,
  SUCCESS_TALEP,
} from './types';

import {Alert} from 'react-native';

import * as RooterNavigation from '../RooterNavigation.js';

export const nameChanged = (name) => {
  return (dispatch) => {
    dispatch({
      type: NAME_CHANGED,
      payload: name,
    });
  };
};

export const surnameChanged = (surname) => {
  return (dispatch) => {
    dispatch({
      type: SURNAME_CHANGED,
      payload: surname,
    });
  };
};

export const textChanged = (text) => {
  return (dispatch) => {
    dispatch({
      type: TALEP_TEXT_CHANGED,
      payload: text,
    });
  };
};

export const sendTalep = ({name, surname, text}) => {
  return (dispatch) => {
    dispatch({
      type: SEND_TALEP,
    });
    if (name == '' || surname == '' || text == '') {
      Alert.alert(
        'BOŞ ALAN',
        'Lütfen boş olan alanı doldurunuz',
        [{text: 'OK', onPress: () => null}],
        {cancelable: false},
      );
    } else {
      firebase.database().ref('/talep').push({name, surname, text});

     /* firebase
        .database()
        .ref('/bildirim')
        .push({
          baslik: 'Başlık 3',
          text:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          show:"1"
        });

        firebase
        .database()
        .ref('/bildirim')
        .push({
          baslik: 'Başlık 4',
          text:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          show:"1"
        });

        firebase
        .database()
        .ref('/bildirim')
        .push({
          baslik: 'Başlık 5',
          text:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          show:"1"
        });*/


      /* firebase.database().ref('/talep').push({name, surname, text});
      firebase.database().ref('/mesai').push({doktor:"Kamil Koca",
      pazartesiSabah:"08:00-13:30",pazartesiAkşam:"15:30-18:00",
      saliSabah:"08:30-12:30",saliAkşam:"13:30-17:30",
      carsambaSabah:"08:30-12:30",carsambaAkşam:"13:30-17:30",
      persembeSabah:"08:00-12:00",persembeAkşam:"13:00-17:00",
      cumaSabah:"08:30-12:30",cumaAkşam:"13:30-17:30",telefon:"0507 374 3418",
    });
    firebase.database().ref('/mesai').push({doktor:"Çagla Özdemir",
      pazartesiSabah:"08:30-12:30",pazartesiAkşam:"13:30-17:30",
      saliSabah:"08:00-13:30",saliAkşam:"15:30-18:00",
      carsambaSabah:"08:30-12:30",carsambaAkşam:"13:30-17:30",
      persembeSabah:"08:30-12:30",persembeAkşam:"13:30-17:30",
      cumaSabah:"08:00-12:00",cumaAkşam:"13:00-17:00",telefon:"0536 278 5798",
    });
    firebase.database().ref('/mesai').push({doktor:"Ebru Gümüş Akça",
      pazartesiSabah:"08:30-12:30",pazartesiAkşam:"13:30-17:30",
      saliSabah:"08:30-12:30",saliAkşam:"13:30-17:30",
      carsambaSabah:"08:00-13:30",carsambaAkşam:"15:30-18:00",
      persembeSabah:"08:30-13:00",persembeAkşam:"14:00-17:30",
      cumaSabah:"08:30-13:00",cumaAkşam:"14:00-17:30",telefon:"0507 469 5466",
    });*/
      dispatch({
        type: SUCCESS_TALEP,
      });
      RooterNavigation.navigate('home')

      // firebase.database().ref("/calisanlar").on("value",data=>console.log(data.toJSON()))
    }
  };
};
