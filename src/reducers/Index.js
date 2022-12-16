

import counterReducer from "./Counter";
import isloggedReducer from "./IsLogged"
import { combineReducers } from "redux";
 const Allreducer=combineReducers({
    counter:counterReducer,
    isLogged:isloggedReducer
 });
 export default Allreducer;