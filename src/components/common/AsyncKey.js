import React,{useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const getData = async (key) => {
    try {
      const data = await AsyncStorage.getItem(key);
      console.log(data,"lola")
      if (data !== null) {
        console.log(data,"papapapappaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        return value;
      }
    } catch (error) {
      console.log(error);
    }
  };
 
export  const setData = async (key,value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      console.log(e);
    }
  }