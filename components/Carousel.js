import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
   
    "https://th.bing.com/th/id/OIP.X2jnvxRHemsTAdKRms-wIgHaHa?pid=ImgDet&rs=1",
    "https://i.pinimg.com/originals/2f/c4/2a/2fc42a2f46cf989364e48a93f6b0e5f5.jpg",
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mfz2zorpe8in1noybhzo",
    // "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lhnwo9ezxo7mpkpvtdcy",
  ];

  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor="#13274F"
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
            borderRadius:3,
            width:"95%",
            
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default Carousel;

// const styles = StyleSheet.create({});