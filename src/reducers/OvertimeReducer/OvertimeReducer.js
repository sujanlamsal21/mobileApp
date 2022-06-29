import { overtimeAction } from "../../actions";

const initialState = {
    overtimeOpen:[],
    overtimeClosed:[],
    error:[],
  };

  const OvertimeReducer =(state=initialState, action) => {
      switch (action.type) {
        case overtimeAction.types.SET_OVERTIME:
            return {
                overtimeOpen:action.payload.overTimeOpen,
                overtimeClosed:action.payload.overtimeClosed,
                error:[],
              };
        default :
           return state;
      }
    };

    export default OvertimeReducer