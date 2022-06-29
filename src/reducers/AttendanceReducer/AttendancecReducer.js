import {AttendanceAction} from '../../actions';

const initialState = {
  attendance:[],
  defaultShift:{},
  error:[],
  count:null,
};

const AttendanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case AttendanceAction.types.SET_ATTENDANCE:
      return {
        attendance:action.payload.attendancesOfEmployee,
        defaultShift:action.payload.defaultshift,
        error:[],
        count:action.payload.attendanceCount
      };
    case AttendanceAction.types.SET_ERROR:
      return {
        ...state,
        error:action.payload};
    default:
      return state;
  }
};

export default AttendanceReducer;