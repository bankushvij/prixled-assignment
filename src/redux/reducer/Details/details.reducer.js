import { GET_DETAILS, POST_DETAILS } from "./details.type";

export const getDetails = () => async (dispatch) => {
    try {

        let detailsData = { details: {} };

        if (localStorage.zomatoCart) {
            const { details } = JSON.parse(localStorage.getItem("collegeDetails"));
            detailsData.details = details;
        }

        return dispatch({ type: GET_DETAILS, payload: detailsData.details });
    }
    catch (error) {
        return dispatch({ type: "Error", payload: error });
    }
}


export const postDetails = (newData) => async (dispatch) => {
    try {

        let detailsData = { details: {} };

        

        detailsData.details=newData;

        localStorage.setItem("collegeDetails", JSON.stringify({ details: detailsData.details }));
        return dispatch({ type: POST_DETAILS, payload:  detailsData.details });
    }
    catch (error) {
        return dispatch({ type: "Error", payload: error });
    }
}