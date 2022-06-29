import {combineReducers} from 'redux';

import Loginreducer from './Loginreducer/Loginreducer';
import AttendanceReducer from './AttendanceReducer/AttendancecReducer';
import OvertimeReducer from './OvertimeReducer/OvertimeReducer';

export default combineReducers({
  loginReducer: Loginreducer,
  attendnceReducer: AttendanceReducer,
  overtimeReducer: OvertimeReducer
});