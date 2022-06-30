const showSplashScreen =() => {
    return { 
        type: 'show',
    }
  };

  const hideSplashScreen =() => {
    return { 
        type: 'hide',
    }
  };

  export default {showSplashScreen,hideSplashScreen};