import {combineReducers} from 'redux';

import Loginreducer from './Loginreducer/Loginreducer';
import AttendanceReducer from './AttendanceReducer/AttendancecReducer';
import OvertimeReducer from './OvertimeReducer/OvertimeReducer';
import splashScreenReducer from "./splashScreenReducer";

export default combineReducers({
  splashScreen: splashScreenReducer,
  loginReducer: Loginreducer,
  attendnceReducer: AttendanceReducer,
  overtimeReducer: OvertimeReducer
});