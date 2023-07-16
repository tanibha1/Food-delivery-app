import {
    StyleSheet,
    Text,
    View,
    Keyboard,
    Button,
    SafeAreaView,
    TextInput,
    ScrollView,
    Pressable,
    TouchableOpacity,
   

} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
//import Carousel from "../components/Carousel.js";
import Carousel from '../../components/Carousel';
import { Feather, Entypo } from "@expo/vector-icons";
import FoodTypes from "../../components/FoodTypes";
import QuickFood from "../../components/QuickFood";
import { Ionicons } from "@expo/vector-icons";
import hotels from "../../data/hotel";
import Menu from "../../components/Menu.js";
import {FontAwesome5} from '@expo/vector-icons';
import Drawbar from "./Drawbar";


const HomeScreen = ({ clicked, searchPhrase, setSearchPhrase, setCLicked }) => {
    const data = hotels;
    return (
        <ScrollView style={{ marginTop: 50 }}>
            {/* search bar */}
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                borderWidth: 1,
                margin: 20,
                padding: 10,
                width: "90%",
                borderColor: "#C0C0C0",
                borderRadius: 8            }}>
                <TextInput style={{ fontSize: 17 }} placeholder="  Search for Restaurant item or more       " />
                <AntDesign name="search1" size={24} color="#E52B50" />


            </View>
            {/* <View>
                <SafeAreaView style={{flex: 1}}>
                    <TouchableOpacity style={{alignItems: "flex-end", margin : 16}}
                    onPress={this.props.navigation.openDrawer}>
                    <FontAwesome5 name="bars" size={24} color="#161924" />
                    </TouchableOpacity>
                    <View style={{flex:1, alignItem : "center" , justifyContent : "center"}} >
                        <Text style ={styles.text}></Text>
                    </View>
                </SafeAreaView>
            </View> */}

            <Drawbar/>

            {/* Image slider component */}
            <Carousel />

            {/* food itm Types */}
            <FoodTypes />

            {/* Quick food */}
            <QuickFood />

            {/* Fliter buttons */}
            <View style={{flexDirection:"row" , alignItems : "center", justifyContent: "space-around"}}>
            <Pressable style={{ marginHorizontal: 10, flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "D0D0D0", padding: 10, borderRadius: 20, justifyContent: 'center' , width :120 }}>
                <Text style={{marginRight:6}}>Fliter</Text>
                <Ionicons name="filter" size={20} color="black" />
            </Pressable>


            <Pressable style={{ marginHorizontal: 10, flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "D0D0D0", padding: 10, borderRadius: 20, justifyContent: 'center' }}>
                <Text>Sort By Rating</Text>
              
            </Pressable>


            <Pressable style={{ marginHorizontal: 10, flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "D0D0D0", padding: 10, borderRadius: 20, justifyContent: 'center' }}>
                <Text>Sort By Price</Text>
               
            </Pressable>

            </View>
            {data.map((item,index) => (
                <Menu ket={index} item={item}/>
            ))}
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : "#FFF"
    },
    text : {
        color : "#161924",
        fontSize: 20,
        fontWeight: "500"
    }
});

export default HomeScreen


