import {
    GET_DATA_LOADING,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE
} from "./actionType";
import axios from "axios";

 export const getDataAPI = () => (dispatch) => {
    dispatch({ type:GET_DATA_LOADING });
   return axios.get("http://localhost:8080/nutrients")
        .then((res) => {console.log("res.data",res.data)
            dispatch({ type:GET_DATA_SUCCESS, payload:res.data })
})
        .catch(err => dispatch({ type:GET_DATA_FAILURE, payload:err }))
}
