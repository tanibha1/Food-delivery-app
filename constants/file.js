import React from 'react';
import {TextInput} from 'react-native';
import {black, darkBlue} from '../constants/color.js';

const Field = props => {
    return (
      <TextInput
        {...props}
        style={{borderRadius: 200, color: black, paddingHorizontal: 12, paddingVertical: 15, width: '78%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 10}}
        placeholderTextColor={black}></TextInput>
    );
  };
  
  export default Field;