import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import { FormInput } from "../../components/common/FormHelper";
import { Colors } from "../../constant";
import { DataTable } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import ResourceRoute from "../../services/Resource";
import { AttendanceAction } from '../../actions';
import { Time, TimeinModulation } from "../../helper";
import { ScrollView } from "react-native-gesture-handler";
import { useToast } from 'react-native-toast-notifications'
import useConfigHook from "../../customHooks/useConfigHook";

function Attendance() {
  const token = useConfigHook();
  const attendanceResource = new ResourceRoute("hr/attendance", token);
  const toast = useToast();
  useEffect(() => {
    getAttendnace();
  }, []);

  const attendance = useSelector((state) => state)
  const attendanceValue = attendance.attendnceReducer.attendance == "" ? [] : attendance.attendnceReducer.attendance;
  const defaultShift = attendance.attendnceReducer.defaultShift;
  const attendanceCount = attendance.attendnceReducer.count;
  const [reason, setReason] = useState("");
  const dispatch = useDispatch();
  function getAttendnace() {
    attendanceResource.getAttendance().then(response => {
      if (response.data) {
        dispatch(AttendanceAction.setAttendance(response.data));
      }
    }).catch(error => {
      console.log(error.response, "error");
      dispatch(AttendanceAction.setError(error.response.data.errors));
    })
  }
  let valueToSend = {
    reason: reason,
    employee_id: "35",
    shift_id: 1,
  }
  function onPressCheckInOut() {
    attendanceResource.setAttendance(valueToSend).then(response => {
      setReason("");
      toast.show(response.data.message, {
        type: "success",
        placement: "top",
        duration: 2000,
        offset: 30,
        animationType: "slide-in",
      });
      getAttendnace();
    }).catch(error => {
      console.log(error, "error");
      dispatch(AttendanceAction.setError(error.response.data.errors));
    })
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>

          <View>
            <TextInput
              value={reason}
              style={styles.TextInput}
              placeholder={"Enter reason"}
              autoFocus={false}
              placeholderTextColor="black"
              onChangeText={setReason}
            />
          </View>
          <View>
            <TouchableOpacity style={styles.btn} onPress={onPressCheckInOut}>
              <Text style={styles.text}>{attendanceCount % 2 == 0 ? "Check In" : "Check Out"}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ width: "100%", marginLeft: 50 }}>
          <Text style={{ color: Colors.DEFAULT_RED }}>{attendance.attendnceReducer.error.reason ?? null}</Text>
        </View>
        <View style={{ width: "100%", marginLeft: 50 }}>
          {defaultShift.name != undefined &&
            <Text>{defaultShift.name + " from " + TimeinModulation(defaultShift.from) + " to " + TimeinModulation(defaultShift.to)}</Text>
          }
        </View>
        <DataTable>
          <DataTable.Row>
            <DataTable.Cell width="40%"><Text style={{ fontWeight: 'bold' }}>Date</Text></DataTable.Cell>
            <DataTable.Cell width="20%"><Text style={{ fontWeight: 'bold' }}>Check In</Text></DataTable.Cell>
            <DataTable.Cell width="20%"><Text style={{ fontWeight: 'bold' }}>Check Out</Text></DataTable.Cell>
            <DataTable.Cell width="20%"><Text style={{ fontWeight: 'bold' }}>Total hours</Text></DataTable.Cell>
          </DataTable.Row>
          <ScrollView>
            {attendanceValue?.map(atten => {
              return (
                <DataTable.Row>
                  <DataTable.Cell>{atten.date}</DataTable.Cell>
                  <DataTable.Cell>
                    <View>
                      {
                        atten.check_in_time.map(data => {
                          return <Text style={{ color: "black" }}>
                            {TimeinModulation(data)}
                          </Text>
                        })}
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <View>
                      {
                        atten.check_out_time.map(data => {
                          return <Text style={{ color: "black" }}>
                            {TimeinModulation(data)}
                          </Text>
                        })}
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell>{Time(atten.total_hrs)}</DataTable.Cell>
                  {/* {atten.check_out_time.map(data=>{
            return(
          <DataTable.Cell numeric>{data}</DataTable.Cell>
            )
          })} */}
                </DataTable.Row>
              )
            })}
          </ScrollView>
        </DataTable>
      </View>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",

  },
  header: {
    flexDirection: "row",
    height: 60,
    width: 380,
    backgroundColor: "#E1F2E9",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    borderRadius: 10
  },
  inputView: {
    backgroundColor: Colors.INPUT_COLOR,
    borderRadius: 30,
    width: 200,
    height: 45,
    marginTop: 20,
    alignItems: "center",
  },

  TextInput: {
    textAlign: "center",
    backgroundColor: "white",
    width: 250,
    height: 40,
    padding: 10,
    fontSize: 16,
    marginLeft: 23,
    alignItems: "center",
    fontFamily: "Poppins-Black",
    justifyContent: "center"
  },
  text: {
    color: "white",
  },
  btn: {
    width: 80,
    height: 30,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.BUTTON_COLOR,
    fontFamily: "Poppins-Bold",
    marginRight: 20,
  },
});
export default Attendance;