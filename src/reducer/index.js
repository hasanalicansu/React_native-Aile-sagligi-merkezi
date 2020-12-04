import {combineReducers} from "redux";
import talepReducer from "./TalepReducer";
import asiReducer from "./AsiReducer";
import bildirimReducer from "./BildirimReducer";
import mesaiReducer from "./MesaiReducer";
import calisanReducer from "./CalisanReducer";


export default combineReducers({
   talepResponse :talepReducer,
   asiResponse:asiReducer,
   bidirimResponse:bildirimReducer,
   mesaiResponse:mesaiReducer,
   calisanResponse:calisanReducer,
});