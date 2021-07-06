import AppState from "../AppState";
import { INCREMENT_REQUEST, INCREMENT_SUCCESS } from "../constants";

export const incrementReducer = (state = AppState, action) => {
    switch(action.type){
        case INCREMENT_REQUEST:
            state.loading = true;
            return {
                ...state
            };
        case INCREMENT_SUCCESS:
            state.counter += action.increment
            state.loading = false;
            return {
                ...state
            }
        default:
            return state;
    }
};