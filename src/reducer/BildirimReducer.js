import { GET_BILDIRIM} from "../actions/types";

const INITIAL_STATE={
}


export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case GET_BILDIRIM:
            return action.payload;
        default:
            return state;
    }
}