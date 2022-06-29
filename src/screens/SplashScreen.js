import React,{useState,useEffect} from "react";
import { StyleSheet,View,Text } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";

const SplashScreen= ({navigation}) =>{

    const [visible,setVisible]=useState(true);

    setTimeout(()=>{setVisible(false)},5000);
    return(
        <View style={styles.splashScreen}>
            <AnimatedLoader
            visible={visible}
            overlayColor="rgba(255,255,255,0.75)"
            source={require("../animations/loader.json")}
            animationStyle={styles.lottie}
            speed={1}
          >
            <Text>Doing something...</Text>
          </AnimatedLoader>
      </View>

    )
}
const styles = StyleSheet.create({
    lottie: {
      width: 100,
      height: 100
    },
    splashScreen:{
      display:"flex",
      flex:1,
      backgroundColor:"white",
      width:"100%",
      height:"100%"
    }
  });
export default SplashScreen;



