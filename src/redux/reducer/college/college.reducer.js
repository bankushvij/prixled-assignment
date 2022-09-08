import { GET_COLLEGE } from "./college.type";

const initialState = {
    colleges: [],
    
}

const collegeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COLLEGE:
            return {
                ...state,
                colleges: action.payload
            }
        


        default:
            return {
                ...state,
            };
    }
}

export default collegeReducer;