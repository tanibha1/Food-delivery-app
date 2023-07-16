import {View,Button,StyleSheet,Text, TouchableOpacity} from 'react-native'
import React from 'react'
import COLORS from '../constants/color.js'

// const Button = (props) => {
//     const filledBgColor = props.color || COLORS.primary;
//     const outlinedColor = COLORS.white;
//     const bgColor = props.filled ? filledBgColor : outlinedColor;
//     const textColor = props.filled ? COLORS.white : COLORS.primary;

    export default function Btn({bgColor, btnLabel, textColor, Press}) {
        return (
          <TouchableOpacity
          onPress={Press}
            style={{
              backgroundColor: bgColor,
              borderRadius: 100,
              elevation: 8,
              alignItems: 'center',
              width: 350,
              paddingVertical: 10,
              paddingHorizontal: 10,
              marginVertical: 10
              
            }}>
            <Text style={{color: textColor, fontSize: 25, fontWeight: 'bold'}}>
              {btnLabel}
            </Text>
          </TouchableOpacity>

         
        );
      }

      
    

// const styles = StyleSheet.create({
//     button: {
//         paddingBottom: 16,
//         paddingVertical: 10,
//         borderColor: COLORS.primary,
//         borderWidth: 2,
//         borderRadius: 12,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// })
