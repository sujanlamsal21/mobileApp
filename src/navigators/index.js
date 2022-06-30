import React, { useRef, useEffect } from 'react';
import { AppState } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginAction } from '../actions';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  SignIn,
  SplashScreen,
  Home,
  ForgetPassword
} from '../screens';
import Attendance from '../screens/hr/Attendance';
import LeaveRequest from '../screens/hr/LeaveRequest';
import Overtime from '../screens/hr/Overtime/Overtime';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './customDrawer';
import { IconButton, Colors } from 'react-native-paper';
import { Icon, CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon, CircleIcon } from 'native-base';

// import {DrawerNavigation} from "./Drawer";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator drawerContent={props => <Sidebar {...props} />} >
      <Drawer.Screen name="Dashboard" component={Home} options={{
        drawerIcon: ({ focused, color, size }) => (
          <CheckCircleIcon size="5" mt="0.5" color="emerald.500" />
        ),
        drawerLabelStyle: { fontSize: 16, color: "black" },
        drawerLabel: "Dashboard"
      }} />
      <Drawer.Screen name="Attendance" component={Attendance} options={{
        drawerIcon: ({ focused, color, size }) => (
          <ChevronLeftIcon size="5" mt="0.5" color="red.500" />
        ),
        drawerLabelStyle: { fontSize: 16, color: "black", fontFamily: "Poppins-Black" }
      }} />
      <Drawer.Screen name="Leave Request" component={LeaveRequest} options={{
        drawerIcon: ({ focused, color, size }) => (
          <ChevronRightIcon size="5" mt="0.5" color="yellow.500" />
        ),
        drawerLabelStyle: { fontSize: 16, color: "black", fontFamily: "Poppins-Black" }
      }} />
      <Drawer.Screen name="Overtime" component={Overtime} options={{
        drawerIcon: ({ focused, color, size }) => (
          <CircleIcon size="5" mt="0.5" color="blue.500" />
        ),
        drawerLabelStyle: { fontSize: 16, color: "black", fontFamily: "Poppins-Black" }
      }} />
    </Drawer.Navigator>
  );
}
const Navigators = ({ navigation }) => {
  const loginState = useSelector((state) => state);
  const appState = useRef(AppState.currentState);
  const showSplashScreen = loginState.splashScreen.showSplash;
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let values
    try {
      values = await AsyncStorage.multiGet(['token', 'user']);
      if (values[0][1] != null) {
        dispatch(LoginAction.getToken({ token: values[0][1], isLogin: true, user: JSON.parse(values[1][1]) }));
        navigation.goBack();
      }
    } catch (e) {
      // read error
    }
  }
  let isLogin = loginState.loginReducer.isLogin;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          showSplashScreen ?
            <>
              <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            </>
            : <>
              {!isLogin ?
                <>{<>
                  <Stack.Screen name="Signin" component={SignIn} options={{ headerShown: false }} />
                  {/* <Stack.Screen name="Forget Password" component={ForgetPassword} /> */}
                </>
                }
                </> :
                <>
                  <Stack.Screen name="Home" component={DrawerNavigation} options={{ headerTintColor: "blue", headerShown: false }} />
                  {/* <Stack.Screen name="SplashScreen" component={SplashScreen}  options={{headerShown: false}} /> */}
                </>


              }
            </>
        }
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default Navigators;
