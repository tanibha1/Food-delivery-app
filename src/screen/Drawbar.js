// import { StyleSheet, Text, View , SafeAreaView, TouchableOpacity } from 'react-native'
// import React from 'react'
// import {FontAwesome5} from '@expo/vector-icons'
// import { registerRootComponent } from 'expo';
// import { DrawerActions } from '@react-navigation/native';
// import {
//     createDrawerNavigator,
//     DrawerContentScrollView,
//     DrawerItemList,
//     DrawerItem,
//   } from '@react-navigation/drawer';

// export default class Drawbar extends React.Component{
//     render() {
//         return (
//             <View style={styles.container}>
//             <SafeAreaView style={{flex:1}}>
//                 <TouchableOpacity style={{alignItems: "flex-end", margin: 16}}
//                onPress={this.props.navigation.openDrawer}>

//                 <FontAwesome5 name="bars" size={24} color="#161924" />
//                 </TouchableOpacity>
              
//                 <View style ={{ flex:1, alignItems: "center" , justifyContent: "center"}}>
//                     <Text style={styles.text}>{this.props.name}</Text>
//                 </View>
              
                
//             </SafeAreaView>
//             </View>
//         )
//     }
// }


// const styles = StyleSheet.create({
//     container : {
//         flex:1,
//         backgroundColor: "#FFF",
//     },
//     text : {
//         color: "#161924",
//         fontSize: 20,
//         fontWeight: "500"
//     }
// });