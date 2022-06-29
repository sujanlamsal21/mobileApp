import React ,{useState} from 'react';
import {
  TextInput,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  Modal,
  Portal,
  Button,
  Provider,
  DataTable,
  TextInput as TI,
} from 'react-native-paper';
import {DatePickerModal} from 'react-native-paper-dates';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {en, enGB, registerTranslation} from 'react-native-paper-dates';
import { formatDate, formatTime } from '../../helper';
registerTranslation('en', en);
registerTranslation('en-GB', enGB);

export function FormInput(props) {
  return (
    <>
      <View>
        <TextInput
          style={props.style}
          placeholder={`Enter ${props.placeholder}`}
          placeholderTextColor={
            props.placeHolderColor && props.placeHolderColor
          }
          onChangeText={props.handleChange}
          secureTextEntry={props.secureTextEntry ?? false}
        />
      </View>
      <Text style={styles.errorMessage}>
        {props.errors ? props.errors : null}
      </Text>
    </>
  );
}

export function FormInputWithBorder(props) {
  console.log(props.value, "kjskjksjdkdjskdjk")
  return (
    <View>
      <Text style={props.styleHeader ? props.styleHeader : {fontSize: 15}}>
        {props.title}
      </Text>
      <TI
        label=""
        showSoftInputOnFocus={props.showKeyBoard??true}
        onChange={props.handleChange}
        style={props.style}
        value={props.value}
        // editable = {props.readOnly ?? true}
      />
      <Text></Text>
    </View>
  );
}

export function FormDate(props) {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    params => {
      alert(params.date), setOpen(false);
      let a = formatDate(params.date);
      setDate(params.date);
      props.setDateShow(a);
    },
    [setOpen, setDate],
  );
  return (
    <View>
      <Text>Date</Text>
      <TI
        onPressIn={() => setOpen(true)}
        label=""
        value={props.dateShow}
        style={{backgroundColor: '#F1EEE9', height: 50}}
      />
      <DatePickerModal
        locale="en"
        mode="single"
        visible={open}
        onDismiss={onDismissSingle}
        date={date}
        onConfirm={onConfirmSingle}
      />
    </View>
  );
}

export function FormDateOrTime(props){
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = date => {
        if(props.mode=="date"){
            a=formatDate(date)
            props.setDateOrTime(a)
        }
        if(props.mode=="time"){
            a=formatTime(date)
            props.setDateOrTime(a)
        }
      hideDatePicker();
    };
    return(
        <View>
        <Text style={props.styleHeader ? props.styleHeader : {fontSize: 15}}>
        {props.title}
      </Text>
        <TI
          onPressOut={showDatePicker}
          showSoftInputOnFocus={false}
          label=""
          style={props.style}
          value={props.dateOrTime}   
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode={props.mode}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <Text style={{fontSize:12,color:"red"}}>
        {props.error??null}
      </Text>
      </View>
    )
}

export function DefaultButton(props) {
  return (
    <>
      <TouchableOpacity style={props.style}>
        <Text style={styles.loginText}>{props.title}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
    fontSize: 15,
  },
  // viewCenter: {
  //     alignItems:"center",
  //     justifyContent:"center"
  //   }
});
