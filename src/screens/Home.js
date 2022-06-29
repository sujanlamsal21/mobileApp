import React from "react";
import {StyleSheet} from "react-native";
import {useDispatch, useSelector} from 'react-redux';
import {LoginAction} from '../actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScrollView,Stack,Center,Text} from "native-base"
// import {getData} from "../components/common/AsyncKey";
const Home=({navigation})=>{
    const loginState = useSelector((state) => state)
    const dispatch=useDispatch();
    let val=130;
    return(
      <ScrollView horizontal={true}>
        <Stack direction="row" mb="2.5" mt="1.5" space={3}>
          <Center size={val} bg="primary.400" rounded="lg" _text={styles.textStyle} shadow={"3"}>
          <Text fontSize="lg" color="red.100">Present Days</Text>
            3
          </Center>

          <Center bg="danger.400" size={val} rounded="lg" _text={styles.textStyle} shadow={"3"}>
          <Text fontSize="lg" color="red.100">Absent Days</Text>
           4
          </Center>

          <Center size={val} bg="success.600" rounded="lg" _text={styles.textStyle} shadow={"3"}>
          <Text fontSize="lg" color="red.100" >Leave Days</Text>
            5
          </Center>

          <Center size={val} bg="warning.400" rounded="lg" _text={styles.textStyle} shadow={"3"}>
          <Text fontSize="lg" color="red.100" >Overtime Hours</Text>
            6
          </Center>
        </Stack>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    homeStyle: {
        display:"flex",
        justifyContent:'space-between',
    },
    textStyle:{
      color: "warmGray.50",
      fontSize:17,
      fontWeight: "medium"
    }
  });

export default Home;
