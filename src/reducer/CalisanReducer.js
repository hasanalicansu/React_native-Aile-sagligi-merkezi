import { GET_CALISAN} from "../actions/types";

const INITIAL_STATE={
}


export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case GET_CALISAN:
            return action.payload;
        default:
            return state;
    }
}