import { GET_COLLEGE } from "./college.type";

import axios from "axios";

export const getCollege=()=>async(dispatch)=>
{
    try{
        
        const collegeList=await axios(
            {
                method:"GET",
                url:"http://universities.hipolabs.com/search?country=India"
            }
        )
        return dispatch({ type: GET_COLLEGE, payload: collegeList.data });
    }
    catch(error)
    {
        return dispatch({type:"ERROR",payload:error})
    }
}