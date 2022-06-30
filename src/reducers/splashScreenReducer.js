const initialState = {
   showSplash:true,
  };

  const splashScreenReducer =(state=initialState, action) => {
    switch (action.type) {
        case 'show':
          return {
            showSplash:true
          };
        case 'hide':
          return {
            showSplash:false
          }
        default:
          return state;
      }
  };

  

  export default splashScreenReducer