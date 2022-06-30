import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabScreen from "./TabScreenOvertime";
import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "../../../styles/overtimeStyle";
import {Button} from "native-base";


export default function OvertimeIndex(props){
    const Tab = createMaterialTopTabNavigator();
    return(
        <>
        <Tab.Navigator initialRouteName="Open" backBehavior="none" screenOptions={{
            tabBarActiveTintColor: "black",
            tabBarLabelStyle: { fontSize: 12 },
            tabBarStyle: { backgroundColor: "white" },
          }}>
            <Tab.Screen name="Open" options={{ tabBarLabel: 'Open' }}>
              {props => <TabScreen {...props}
                          data={props.data?.overtimeOpen}
                          viewOvertimeForm={props.viewOvertimeForm}
                          />}
            </Tab.Screen>
            <Tab.Screen name="Closed"  options={{ tabBarLabel: 'Closed' }}>
              {props => <TabScreen {...props} 
                           data={props.data?.overtimeClosed}
                           viewOvertimeForm={props.viewOvertimeForm}
                          />}
            </Tab.Screen>
          </Tab.Navigator>
         
        </>
    )
}