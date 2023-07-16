import {View, Text, StyleSheet,Image, Pressable} from 'react-native'
import React from 'react'
// import { LinearGradient } from "expo-linear-gradient";
import Background from '../../components/background';
import COLORS, { black } from '../../constants/color';
import Btn from '../../components/Button.js';
import {darkBlue, blue} from '../../constants/color';




const Welcome = (props) => {
    return (
      <Background>
        <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
        <Image 
        source={require("../../assets/lo.jpg")}
                         style={{
                             height: 200,
                             width: 200,
                             justifyContent:'center',
                             alignItems:'center',
                             flex:1,
                             paddingRight: "20%",
                             resizeMode: 'contain',
                             
                            
                            // transform: [
                            //     { translateX: 20 },
                            //     { translateY: 50 },
                            //     { rotate: "-15deg" }
                            // ]
                        }}
                    />
        
        {/* <Text style={{ color: 'white', fontSize: 44, marginTop: 75, marginRight:90 }}>Order! Recive!Fun</Text> */}
        <Text style={{ color: 'white', fontSize: 64, marginBottom: 40 }}></Text>
       <Btn bgColor={black}  textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
        <Btn bgColor='white' textColor={darkBlue} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
        <Btn bgColor={black} textColor='white' btnLabel="scan" Press={() => props.navigation.navigate("scan")} />
         
         </View>
      </Background>
    );
  }
  
  const styles = StyleSheet.create({})
  
  export default Welcome;

  