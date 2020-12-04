import {SEND_DOGUM_TAKVIM, SEND_ASI_BILGI} from '../actions/types';

const INITIAL_STATE = {
  day: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_DOGUM_TAKVIM:
      return {...state, day: action.payload};
    case SEND_ASI_BILGI:
      return {...state, day: action.payload};

    default:
      return state;
  }
};
