import React from "react";
import { Text, View } from "react-native";
import { FormDateOrTime, FormInputWithBorder } from "../../../components/common/FormHelper";
import { Button } from "react-native-paper";
import { ScrollView } from "native-base";

export default function OvertimeForm(props) {
    return (
        <View style={{ flex: 4.5, margin: 10 }}>
            <ScrollView>
                <FormDateOrTime
                    title="Date"
                    dateOrTime={props.dateValue}
                    setDateOrTime={props.setDateValue}
                    mode="date"
                    style={{ backgroundColor: '#F1EEE9', height: 50 }}
                />
                <FormDateOrTime
                    title="From Time"
                    dateOrTime={props.fromTime}
                    setDateOrTime={props.setFromTime}
                    mode="time"
                    style={{ backgroundColor: '#F1EEE9', height: 50 }}
                />
                <FormDateOrTime
                    title="To Time"
                    dateOrTime={props.toTime}
                    setDateOrTime={props.setToTime}
                    mode="time"
                    style={{ backgroundColor: '#F1EEE9', height: 50 }}
                />
                <FormInputWithBorder
                    title="No Of Hours"
                    readOnly={false}
                    handleChange={props.setNumberofHours}
                    style={{ backgroundColor: '#F1EEE9', height: 50 }}
                    value={props.numberofHours}
                />
                <FormInputWithBorder
                    title="Reason"
                    handleChange={val => props.setReason(val)}
                    style={{ backgroundColor: '#F1EEE9', height: 50 }}
                    value={props.reason}
                />
            </ScrollView>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent:"space-between" }}>
                <Button
                    style={{ backgroundColor: '#E7264C', width: 115, float: 'left' }}
                    onPress={props.hideModal}>
                    <Text style={{ color: 'white' }}>Cancel</Text>
                </Button>
                <Button style={{ backgroundColor: '#4A90C3', width: 115, float: 'right' }} onPress={props.handleSubmit}>
                    <Text style={{ color: 'white' }}>Submit</Text>
                </Button>
            </View>
        </View>
    )
}