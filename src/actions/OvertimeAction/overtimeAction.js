const types = {
    SET_OVERTIME:"SET_OVERTIME",
    SET_ERROR:"SET_ERROR",
    CLEAR_REASON:"CLEAR_REASON",
  };
  
  const setOvertime = (data) => {
       return {
        type: types.SET_OVERTIME,
        payload: {
            overTimeOpen : data.overTimeUpcoming,
            overtimeClosed: data.overTimeCompleted
        },
      }
    };

  const setError = (data) => {
      return {
       type: types.SET_ERROR,
       payload: data,
     }
   };
export default {setOvertime,setError,types};