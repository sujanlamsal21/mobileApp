import React, { useEffect } from 'react';
import Navigators from "./src/navigators"
import Store from './src/store';
import {Provider} from 'react-redux';
import {LogBox} from "react-native";
import "intl";
import "intl/locale-data/jsonp/en";
import { NativeBaseProvider} from "native-base";
import { ToastProvider  } from 'react-native-toast-notifications'
// import SplashScreen from 'react-native-splash-screen'

LogBox.ignoreLogs([
"ViewPropTypes will be removed",
"ColorPropType will be removed",
])

const App= () =>{
  return (
    <Provider store={Store}>
      <ToastProvider>
      <NativeBaseProvider>
      <Navigators />
      </NativeBaseProvider>
      </ToastProvider>


        
    </Provider>
  );
};
export default App;
