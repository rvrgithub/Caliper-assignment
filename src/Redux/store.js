import { reducer as DataReducer } from "./reducer";
import thunk from 'redux-thunk';
import {
    // combineReducers,
    legacy_createStore,
    applyMiddleware
} from "redux";
// const rootReducer = combineReducers({
//     DataReducer: DataReducer,
// })

export const store = legacy_createStore(DataReducer, applyMiddleware(thunk));