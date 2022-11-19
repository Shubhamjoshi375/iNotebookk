import axios from "axios";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });

    const { data } = await axios.post(
      "http://localhost:5000/api/auth/login",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }


      


    );


    dispatch({
      type: "LoginSuccess",
      payload: data.user,
     
    });
  
    
    
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message,
    });
  }
};