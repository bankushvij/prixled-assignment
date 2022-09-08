import { combineReducers } from "redux";
import collegeReducer from "./college/college.reducer";

const rootReducer=combineReducers(
    {   
        collegeReducer,
    }
)

export default rootReducer;