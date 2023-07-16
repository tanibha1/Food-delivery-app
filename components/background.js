import React from 'react';
import {View, ImageBackground} from 'react-native';

const Background = ({ children }) => {
  return (
    <View>
       <ImageBackground source={require("../assets/bgi.webp")} style={{ height: '110%' , width: '100%' }} /> 
      <View style={{ position: "absolute" }}>
        {children}
      </View>
    </View>
  );
}

export default Background;