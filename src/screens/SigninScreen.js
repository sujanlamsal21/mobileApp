import axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginAction,splashScreenAction} from '../actions';
import LoginResource from "../services/Login/LoginResource";
import ResourceRoute from "../services/Resource";
import { FormInput } from "../components/common/FormHelper";
import useConfigHook from "../customHooks/useConfigHook";

export default function SignIn({navigation}) {
  const  config=useConfigHook();
  const loginData=new ResourceRoute("auth",config);
  const loginState = useSelector((state) => state)
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const storeData = async (value) => {
    const firstPair = ["token", value.token]
    const secondPair = ["user", JSON.stringify(value.user)]
    try {
      await AsyncStorage.multiSet([firstPair, secondPair]);
    } catch(e) {
      console.log(e);
    }
  }
  const onPressLogin = async () =>{
    dispatch(splashScreenAction.showSplashScreen())
    try{
      await loginData.login({email:email,password:password})
      .then(response=>{
        if(response.data.token){
          dispatch(LoginAction.getToken(response.data));
          storeData(response.data);
          navigation.navigate("Home");
        }
      }).catch(error=>{
        console.log(error.response.data, 'aaa')
        dispatch(LoginAction.getError(error.response.data.errors));
      });
    }catch(err){
      console.log(err);
    }
};
   

  return (
    <View style={styles.container}>
       <Image style={styles.image} source={require("../assets/logo.jpg")} />
      <View style={styles.inputView}>
        <FormInput name="email"
                   placeholder="email"
                   style={styles.TextInput}
                   handleChange={setEmail}
                   placeHolderColor="black"
                   errors={loginState.loginReducer.error.email??null}
                   />
      </View>

      <View style={styles.inputView}>
        <FormInput name="password"
                   placeholder="password"
                   style={styles.TextInput}
                   handleChange={setPassword}
                   placeHolderColor="black"
                   errors={loginState.loginReducer.error.password??null}
                   secureTextEntry={true}
                   
                   />
      </View>

      <TouchableOpacity 
      // onPress={navigation.navigate("Forget Password")}
      >
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={onPressLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.extraDiv}>

      </View>
    </View>
  );
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
