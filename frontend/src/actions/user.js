import axios from "axios";

export const loginUser = (data) => {
    console.log(data)
    return async (dispatch) => {
        try {
            axios.post("/api/user/login",
                data
            ).then(response => {
                dispatch(userLoginSuccess(response.data));
            });;
             
        } 
        
        catch (err) {
           console.log(err, 'err')
        }
    }
};


function userLoginSuccess(response) {
    return {
        type: 'LOGIN_USER',
        payload: response
    }
}
