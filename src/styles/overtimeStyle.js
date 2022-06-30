import React from "react";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
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
    rowFront:{
      backgroundColor: "black",
      borderRadius: 0,
      height : 60,
      // margin: 5,
      // marginBottom : 0,
      // shadowColor : "#999",
      // shadowOffset:{width:0 ,height: 1},
      // shadowOpacity: 0.8,
      // shadowRadius: 2,
      // elevation:5
    },
    rowFrontVisible:{
      backgroundColor: "#FFF",
      borderRadius: 5,
      height : 60,
      padding: 10,
      // marginBottom : 15,
    },
    rowBack:{
      alignItems:"flex-end",
      backgroundColor: "#FFF",
      flex:1,
      flexDirection:"row",
      justifyContent:"space-between",
      paddingLeft: 15,
        // position:"absolute",
      margin: 5,
        // right:120,
      // marginBottom: 15,
      borderRadius: 5
    },
    backRightBtn:{
      // alignItems:"flex-end",
      // bottom:0,
      // justifyContent:"center",
      // position:"relative",
      // top:0,
      // width:50,
      // height : 60,
      // paddingRight:10
    },
    backRightBtnLeft :{
      backgroundColor:"green",
      // right: 120,
        left:234,
        alignItems:"flex-end",
        bottom:0,
        justifyContent:"center",
        position:"relative",
        top:0,
        width:50,
        height : 60,
        paddingRight:10
    },
    backRightBtnRight:{
      backgroundColor:"red",
      right:0,
      borderTopRightRadius:5,
      borderBottomRightRadius: 5,
      alignItems:"flex-end",
      bottom:0,
      justifyContent:"center",
      position:"relative",
      top:0,
      width:50,
      height : 60,
      paddingRight:3
    }
  });