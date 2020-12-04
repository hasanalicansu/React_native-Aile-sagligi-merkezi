import { GET_MESAI} from "../actions/types";

const INITIAL_STATE={
    data:[]
}

export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case GET_MESAI:
            return action.payload      
        default:
            return state;
    }
}