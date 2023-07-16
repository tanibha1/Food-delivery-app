 import { StyleSheet, Text, View } from 'react-native'
 import React from 'react'
 import { NavigationContainer } from '@react-navigation/native'
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import HomeScreen from './src/screen/HomeScreen';
 import MenuScreen from './src/screen/MenuScreen';
 import CartScreen from './src/screen/CartScreen';
  import LoadingScreen from './src/screen/LodingScreen';
  import OrderScreen from './src/screen/OrderScreen';
  import Welcome from './src/screen/Welcome';
   import Login from './src/screen/Login';
  import Signup from './src/screen/Signup';
  import Scan from './src/screen/Scan';


const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
     <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="Welcome" component ={Welcome} options={{headerShown: false}}/> 
     
      <Stack.Screen name ="Login" component ={Login} options={{headerShown:false}}/> 
     <Stack.Screen name ="Signup" component ={Signup} options={{headerShown:false}}/>
     <Stack.Screen name ="scan" component ={Scan} options={{headerShown:false}}/>
     <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
       <Stack.Screen name="Menu" component={MenuScreen} options={{headerShown :false}}/> 
        <Stack.Screen name="Cart" component={CartScreen} options={{headerShown :false}}/>
          <Stack.Screen name="Loding" component={LoadingScreen} options={{headerShown :false}}/>
        <Stack.Screen name="Order" component={OrderScreen} options={{headerShown :false}}/>  
       </Stack.Navigator>
     </NavigationContainer>
   )
 }
 const styles = StyleSheet.create({})

 export default StackNavigator

 
 