import {LoginAction} from '../../actions';

const initialState = {
  token: '',
  isLogin:false,
  showSplash:true,
  error:[],
  user:{},
};

const Loginreducer = (state = initialState, action) => {
  switch (action.type) {
    case LoginAction.types.LOGOUT:
      return {...state,token: '',isLogin:false,showSplash:false,error:[]};
    case LoginAction.types.GET_TOKEN:
      return {token: action.payload.token,isLogin:true,showSplash:false,error:[],user:action.payload.user};
    case LoginAction.types.ERROR:
      return {...state,token: "",isLogin:false,showSplash:false,error:action.payload};
    default:
      return state;
  }
};

export default Loginreducer;