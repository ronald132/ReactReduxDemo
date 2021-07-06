import AppState from "../AppState";
import { QUOTE_REQUEST, QUOTE_SUCCESS } from "../constants";

export const quoteReducers = (state = AppState, action) => {
    switch(action.type){
        case QUOTE_REQUEST:
            state.loading = true;
            return {
                ...state
            }

        case QUOTE_SUCCESS:
            state.loading = false;
            state.quotes = action.quotes;
            return {
                ...state
            }
        default:
            return state;
    }
}