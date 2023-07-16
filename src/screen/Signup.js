import { View, Text, Image, Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS, { black } from '../../constants/color.js';
import { Ionicons } from "@expo/vector-icons";
// import Checkbox from "expo-checkbox"
import Btn from '../../components/Button.js';
import Background from '../../components/background.js';
import Field from '../../constants/file.js';
import {darkBlue} from '../../constants/color.js';



const Signup = props => {
    return (
      <Background>
        <View style={{alignItems: 'center', width: 460}}>
          <Text
            style={{
              color: 'white',
              fontSize: 54,
              fontWeight: 'bold',
              marginTop: 30,
            }}>
            Register
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Create a new account
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              height: 700,
              width: 460,
              borderTopLeftRadius: 130,
              paddingTop: 50,
              alignItems: 'center',
            }}>
            <Field placeholder="First Name" />
            <Field placeholder="Last Name" />
            <Field
              placeholder="Email / Username"
              keyboardType={'email-address'}
            />
            <Field placeholder="Contact Number" keyboardType={'number'} />
            <Field placeholder="Password" secureTextEntry={true} />
            <Field placeholder="Confirm Password" secureTextEntry={true} />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '78%',
                paddingRight: 16
              }}>
              <Text style={{color: 'grey', fontSize: 16}}>
                By signing in, you agree to our{' '}
              </Text>
              <Text style={{color: darkBlue, fontWeight: 'bold', fontSize: 16}}>
                Terms & Conditions
              </Text>
            </View>
  
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent :"center",
                width: '78%',
                paddingRight: 16,
                marginBottom: 10
              }}>
              <Text style={{color: 'grey', fontSize: 16}}>
                and {" "}
              </Text>
              <Text style={{color: darkBlue, fontWeight: 'bold', fontSize: 16}}>
                Privacy Policy
              </Text>
            </View>
            <Btn
              textColor="white"
              bgColor={black}
              btnLabel="Signup"
              Press={() => {
                alert('Accoutn created');
                props.navigation.navigate('Login');
              }}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Already have an account ?{' '}
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Login')}>
                <Text
                  style={{color: darkBlue, fontWeight: 'bold', fontSize: 16}}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Background>
    );
  };
  
  export default Signup;