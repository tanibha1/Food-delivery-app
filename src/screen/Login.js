import { View, Text, Image , Pressable, TextInput, TouchableOpacity,ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS, { black } from '../../constants/color.js';
import { Ionicons } from "@expo/vector-icons";
// import Checkbox from "expo-checkbox"
import Btn from '../../components/Button.js';
 import Background from '../../components/background.js';
 import {darkBlue} from '../../constants/color.js';
 import Field from '../../constants/file';
import { useNavigation } from '@react-navigation/native';




const Login = (props) => {
  // const navigation = useNavigation();
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.replace("Home")
  //   },2000)
  // },[])
    return (
      <Background>
        <View style={{alignItems: 'center', width: 460 , height : 50}}>
          <Text
            style={{
              color: black,
              fontSize: 54,
              fontWeight: 'bold',
              marginVertical: 20,
              // marginHorizontal: 20,
              paddingBottom : "20%"
            }}>
            
            Login
          </Text>
          {/* <view><ImageBackground source={require("../assets/welcome_bgi.jpg")} style={{ height: '100%' , width: '100%' }} /></view> */}
          <View
            style={{
              backgroundColor:'white' ,
              height: 700,
              width: 460,
              borderTopLeftRadius: 130,
              paddingTop: 100,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 40, color: black, fontWeight: 'bold'}}>
              Welcome Back
            </Text>
            <Text
              style={{
                color: 'grey',
                fontSize: 19,
                fontWeight: 'bold',
                marginBottom: 20,
              }}>
              Login to your account
            </Text>
            <Field style={{width: 300, height : 200}}
              placeholder="Email / Username"
              keyboardType={'email-address'}
            />
            <Field placeholder="Password" secureTextEntry={true} />
            <View
              style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200}}>
              <Text style={{color:'white', fontWeight: 'bold', fontSize: 16}}>
                Forgot Password ?
              </Text>
            </View>
            <Btn textColor='white' bgColor={black} btnLabel="Login" Press={() => props.navigation.navigate("Home")} />
            <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
              <Text style={{ fontSize: 16, fontWeight:"bold" }}>Don't have an account ? </Text>
              <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
              <Text style={{ color:black, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </Background>
    );
  };
  
  export default Login;