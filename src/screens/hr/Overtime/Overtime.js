import React, { useState, useEffect } from 'react';
import {
    Text, View, StyleSheet, TouchableOpacity, TouchableHighlight, Keyboard, SafeAreaView,
} from 'react-native';
import {Button, CircleIcon, ScrollView} from 'native-base';
import {
  DataTable,
  TextInput as TI,
} from 'react-native-paper';
import {
  FormDateOrTime,
  FormInputWithBorder,
} from '../../../components/common/FormHelper';
import { formatDate, getNumberOfHours } from '../../../helper';
import { CustomModel } from "../../../FormHelper/formhelper"
import useConfigHook from "../../../customHooks/useConfigHook";
import ResourceRoute from "../../../services/Resource";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import overtimeAction from '../../../actions/OvertimeAction/overtimeAction';
import { useDispatch, useSelector } from 'react-redux';
import { TimeinModulation, spanByStatusReact } from "../../../helper";
import {styles} from "../../../styles/overtimeStyle";
import TabScreen from './TabScreenOvertime';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OvertimeIndex from "./OvertimeIndex";
import OvertimeForm from "./OvertimeForm";



function Overtime({navigation,props}) {
  const Tab = createMaterialTopTabNavigator();
    const Stack = createNativeStackNavigator();
  const token = useConfigHook();
  const overtimeResource = new ResourceRoute("hr/overtime", token);
  const [visible, setVisible] = useState(true);
  const [keyboardShow, setKeyboardShow] = useState();
  const showModal = () => {
    setVisible(true);
  }
  const [dateValue, setDateValue] = useState(formatDate(new Date()));
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');
  const [overtimeOpen, setOvertimeOpen] = useState([]);
  const [overtimeClosed, setOvertimeClosed] = useState([]);
  const [numberofHours, setNumberofHours] = useState(null);
  const [reason, setReason] = useState('');
  const dispatch = useDispatch();
  const hideModal = () => {
    navigation.navigate('OvertimeIndex')
    setReason('');
    setToTime('');
    setFromTime('');
    setVisible(true);
  };
  useEffect(() => {
    getAllOvertimeData();
  }, [])
  const Overtime = useSelector((state) => state.overtimeReducer)
  useEffect(() => {
    setOvertimeOpen(Overtime.overtimeOpen);
    setOvertimeClosed(Overtime.overtimeClosed);
  }, [Overtime]);

  useEffect(() => {
    let a = getNumberOfHours(fromTime, toTime);
    setNumberofHours(a);
  }, [fromTime, toTime]);

  const handleSubmit = () => {
    console.log('submit')
  }

  const getAllOvertimeData = () => {
    overtimeResource.index()
      .then(response => {
        if (response.data) {
          dispatch(overtimeAction.setOvertime(response.data.data))
        }
      }).catch(error => {
        console.log(error);
      })
  }

  const viewOvertimeForm=()=>{
    setVisible(false);
    navigation.navigate('OvertimeForm')
  }



  return (
    <>
        <Stack.Navigator  screenOptions={{
                              headerShown: false
                            }}>
            <Stack.Screen name='OvertimeIndex'>
                {props => <OvertimeIndex {...props} data={Overtime} visible={visible} viewOvertimeForm={viewOvertimeForm}/>}
            </Stack.Screen>
            <Stack.Screen name="OvertimeForm">
                    {props => <OvertimeForm {...props}
                                      dateValue={dateValue}
                                      setDateValue={setDateValue}
                                      fromTime={fromTime}
                                      setFromTime={setFromTime}
                                      toTime={toTime}
                                      setToTime={setToTime}
                                      setNumberofHours={setNumberofHours}
                                      numberofHours={numberofHours}
                                      setReason={setReason}
                                      reason={reason}
                                      hideModal={hideModal}
                                      handleSubmit={handleSubmit}
                                      />}
            </Stack.Screen>
        </Stack.Navigator>
        {/* <TouchableOpacity onPress={() => navigation.navigate('OvertimeForm')}>
          <View style={styles.addDiv}>
            <Text style={styles.plusIcon}>+</Text>
          </View>
        </TouchableOpacity> */}
        {/* {
          visible && 
          <Button style={{ backgroundColor: '#4A90C3',height:50, width: 100,alignSelf:"flex-end", float: 'left',marginRight:4,marginBottom:5, borderRadius:50 }} onPress={viewOvertimeForm}>
          <Text style={{ color: 'white' }}>+Add</Text>
         </Button>
      //     <TouchableOpacity>
      //     <Button
      //     title="+Add"
      //     onPress={viewOvertimeForm}
      //     style={{width:100, borderRadius:10}}
      // />
      // </TouchableOpacity>
        }  */}
    </>
  );
}
export default Overtime;

