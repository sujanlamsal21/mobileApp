const types = {
  GET_TOKEN:"GET_TOKEN",
  ERROR:"ERROR",
  LOGOUT:"LOGOUT",
};

const getToken = (data) => {
     return {
      type: types.GET_TOKEN,
      payload: data,
    }
  };

  const getError = (data) => {
    return {
     type: types.ERROR,
     payload: data,
   }
 }
  const logout = () => {
    return {
     type: types.LOGOUT,
     payload: "",
   }
 }

export default {getToken,getError,logout,types};

