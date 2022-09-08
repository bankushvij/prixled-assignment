import { GET_DETAILS, POST_DETAILS } from "./details.type";

const initialState = {
    details: {}
}

const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DETAILS:
            return {
                ...state,
                details: action.payload
            };
        case POST_DETAILS:
            return {
                ...state,
                details: action.payload
            }
        default:
            return {
                ...state
            };
    }
}
export default detailsReducer;