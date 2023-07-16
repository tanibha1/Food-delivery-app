import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screen/HomeScreen';
import { Provider } from "react-redux";
// import home from './screen/home.js';
import StackNavigator from "./StackNavigator";
  import store from "./store";
  


export default function App() {
  return (
    <>
        <Provider store={store}>
         <StackNavigator /> 
      </Provider>
    </>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
