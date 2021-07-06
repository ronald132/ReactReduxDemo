import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { incrementReducer } from "./reducers/incrementReducers";
import { quoteReducers } from "./reducers/quoteReducers";

const reducer = combineReducers({
    myIncrement: incrementReducer,
    myQuote: quoteReducers
})

let initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
