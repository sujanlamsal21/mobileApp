const types = {
    SET_ATTENDANCE:"SET_ATTENDANCE",
    SET_ERROR:"SET_ERROR",
    CLEAR_REASON:"CLEAR_REASON",
  };
  
  const setAttendance = (data) => {
       return {
        type: types.SET_ATTENDANCE,
        payload: data,
      }
    };

  const setError = (data) => {
      return {
       type: types.SET_ERROR,
       payload: data,
     }
   };
export default {setAttendance,setError,types};