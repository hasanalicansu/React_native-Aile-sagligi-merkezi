import { NAME_CHANGED,
    SURNAME_CHANGED,
    TALEP_TEXT_CHANGED,
    SEND_TALEP,SUCCESS_TALEP } from "../actions/types";

const INITIAL_STATE={
    name:"",
    surname:"",
    text:"",
}


export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case NAME_CHANGED:
            return{...state, name:action.payload}
        case SURNAME_CHANGED:
            return{...state, surname:action.payload}
        case TALEP_TEXT_CHANGED:
            return {...state, text:action.payload}
        case SEND_TALEP:
            return {...state,}
        case SUCCESS_TALEP:
            return {name:"",surname:"",text:""}
        default:
            return state;
    }
}