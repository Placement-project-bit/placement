import { CLEAR_ERRORS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants/userConstant";
import axios from "axios";

export const login = (usn, password) => async(dispatch) => {
    try{
        dispatch({type: LOGIN_REQUEST});
        const config = { headers: { "Content-Type": "application/json" } };

        const{data} = await axios.post(
            `api/v1/login`,
            {usn, password},
            config
        );

        dispatch({type: LOGIN_SUCCESS, payload: data.user});
    }catch(error){
        dispatch({type: LOGIN_FAIL, payload: error.response.data.message});
    }
};

//Clearing Errors
export const clearErrors = () => async(dispatch) => {
    dispatch({type: CLEAR_ERRORS});
};