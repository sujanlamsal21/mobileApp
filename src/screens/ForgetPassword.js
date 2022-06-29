import axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,AsyncStorageStatic
} from "react-native";
import { FormInput,DefaultButton } from "../components/common/FormHelper";
import {useDispatch, useSelector} from 'react-redux';
function ForgetPassword(){
    const [email,setEmail]=useState();
    const loginState = useSelector((state) => state)
    return(
        <>
         <View style={styles.container}>
       <View style={styles.inputView}>
        <FormInput name="email"
                   placeholder="email"
                   style={styles.TextInput}
                   handleChange={setEmail}
                   placeHolderColor="black"
                   errors={null}
                   />
      </View> 
    <DefaultButton style={styles.loginBtn} title="Send Password Reset link" />
    </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      marginTop:10,
      marginBottom: 40,
      width: 80,
      height:80,
    },
  
    inputView: {
      backgroundColor: "#B8B8B8",
      borderRadius: 30,
      width: "80%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
  
    TextInput: {
      textAlign:"center",
      height: 50,
      flex: 1,
      padding: 10,
      fontSize:16,
    },
  
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
    loginText:{
     color:"white",
    },
  
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#746AB0",
    },
    extraDiv:{
        marginBottom:50,
    }
  });

  export default ForgetPassword;