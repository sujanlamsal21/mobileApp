import React, { useState, useEffect } from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity, Keyboard, SafeAreaView,
} from 'react-native';
import { CircleIcon, ScrollView } from 'native-base';
import {
  DataTable,
  TextInput as TI,
} from 'react-native-paper';
import {
  FormDateOrTime,
  FormInputWithBorder,
} from '../../components/common/FormHelper';
import { formatDate, getNumberOfHours } from '../../helper';
import { CustomModel } from "../../FormHelper/formhelper"
import useConfigHook from "../../customHooks/useConfigHook";
import ResourceRoute from "../../services/Resource";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import overtimeAction from '../../actions/OvertimeAction/overtimeAction';
import { useDispatch, useSelector } from 'react-redux';
import { TimeinModulation, spanByStatusReact } from "../../helper";

function Overtime(props) {
  const Tab = createMaterialTopTabNavigator();
  const token = useConfigHook();
  const overtimeResource = new ResourceRoute("hr/overtime", token);
  const [visible, setVisible] = useState(false);
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
    setReason('');
    setToTime('');
    setFromTime('');
    setVisible(false);
  };
  useEffect(() => {
    getAllOvertimeData();
  }, [])
  const Overtime = useSelector((state) => state.overtimeReducer)
  useEffect(() => {
    setOvertimeOpen(Overtime.overtimeOpen);
    setOvertimeClosed(Overtime.overtimeClosed);
  }, [Overtime]);
  // useEffect(() => {
  //   const keyboardDidShowListener = Keyboard.addListener(
  //     'keyboardDidShow',
  //     () => {
  //       setKeyboardShow(true);
  //     },
  //   );
  //   const keyboardDidHideListener = Keyboard.addListener(
  //     'keyboardDidHide',
  //     () => {
  //       setKeyboardShow(false);
  //     },
  //   );
  //   return () => {
  //     keyboardDidHideListener.remove();
  //     keyboardDidShowListener.remove();
  //   };
  // }, []);

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

  function TabScreen(props) {
    const optionsPerPage = [2, 3, 4];
    const [page, setPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);

    useEffect(() => {
      setPage(0);
    }, [itemsPerPage])
    return (
        <DataTable style={{flex:1}}>
          <DataTable.Header>
            <DataTable.Title>Date</DataTable.Title>
            <DataTable.Title>From</DataTable.Title>
            <DataTable.Title>To</DataTable.Title>
            <DataTable.Title>Status</DataTable.Title>
            {/* <DataTable.Title>Action</DataTable.Title> */}
          </DataTable.Header>
          <ScrollView>
          {
            props.data?.map((raw, index) => {
              return (
                <DataTable.Row key={index}>
                  <DataTable.Cell>{raw.date}</DataTable.Cell>
                  <DataTable.Cell>{TimeinModulation(raw.from_time)}</DataTable.Cell>
                  <DataTable.Cell>{TimeinModulation(raw.to_time)}</DataTable.Cell>
                  <DataTable.Cell>{raw.status}</DataTable.Cell>
                  {/* <DataTable.Cell>{}</DataTable.Cell> */}
                </DataTable.Row>
              )
            })
          }
          </ScrollView>
        </DataTable>
    );
  }

  return (
    <>
      <Tab.Navigator initialRouteName="Open" screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: "white" },
      }}>
        <Tab.Screen name="Open" options={{ tabBarLabel: 'Open' }}>
          {props => <TabScreen {...props} data={overtimeOpen} />}
        </Tab.Screen>

        <Tab.Screen name="Closed"  options={{ tabBarLabel: 'Closed' }}>
          {props => <TabScreen {...props} data={overtimeClosed} />}
        </Tab.Screen>


      </Tab.Navigator>

      <CustomModel
        visible={visible}
        hideModal={hideModal}
        styles={styles}
        title="Create Overtime"
        body={
          <View style={{ flex: 4.5 }}>
            <FormDateOrTime
              title="Date"
              dateOrTime={dateValue}
              setDateOrTime={setDateValue}
              mode="date"
              style={{ backgroundColor: '#F1EEE9', height: 50 }}
            />
            <FormDateOrTime
              title="From Time"
              dateOrTime={fromTime}
              setDateOrTime={setFromTime}
              mode="time"
              style={{ backgroundColor: '#F1EEE9', height: 50 }}
            />
            <FormDateOrTime
              title="To Time"
              dateOrTime={toTime}
              setDateOrTime={setToTime}
              mode="time"
              style={{ backgroundColor: '#F1EEE9', height: 50 }}
            />
            <FormInputWithBorder
              title="No Of Hours"
              readOnly={false}
              handleChange={setNumberofHours}
              style={{ backgroundColor: '#F1EEE9', height: 50 }}
              value={numberofHours}
            />
            <FormInputWithBorder
              title="Reason"
              handleChange={val => setReason(val)}
              style={{ backgroundColor: '#F1EEE9', height: 50 }}
              value={reason}
            />
          </View>
        }
        handleSubmit={handleSubmit}
      />
      <TouchableOpacity onPress={() => showModal()}>
        <View style={styles.addDiv}>
          <Text style={styles.plusIcon}>+</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  addDiv: {
    height: 60,
    width: 60,
    backgroundColor: 'blue',
    alignItems: 'center',
    color: 'black',
    justifyContent: 'center',
    borderRadius: 50,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 10,
  },
  plusIcon: {
    fontSize: 30,
    color: 'white',
  },
  containerStyle: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    flex: 1,
  },
});
export default Overtime;
