import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useState, useEffect} from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner';
// import {StatusBar } from 'expo-statue bar';


export default function Scan() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned,setScanned] = useState(false);
    const [text, setText] = useState('Not yet Scanned')

    const askForCameraPermission = () => {
       (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status == 'granted')
       })()
    }

    //Request Camera Permission
    useEffect(() => {
        askForCameraPermission();
    }, []);

    //what happens when we scan the bar code
   const handelBarCodeScanned = ({type,data}) => {
    setScanned(true);
    setText(data);
    console.log('Type: ' + type + '\nData' + data)
   };
 //check permission and return the screens
 if(hasPermission === null) {
    return (
        <View style={styles.container}>
        <Text>Requsting for camera permission</Text>
        </View>
    )
 }

 if(hasPermission === false) {
    return (
        <View style={styles.container}>
        <Text style={{margin: 10}}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
        </View> 
    )
 }
  return (
    <View style={styles.container}>
      <View style ={styles.barcodebox}>
        <BarCodeScanner
        onBarCodeScanned = {scanned ? undefined : handelBarCodeScanned}
        style={{height: 400, width: 400 }} /> 
      </View>
      <Text style={styles.maintext}>{text}</Text>

      {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
 
    </View>
  );
}



const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

barcodebox: {
  backgroundColor : '#fff',
  alignItems: 'center',
  height : 300,
  width: 300,
  overflow: 'hidden',
  borderRadius: 30,
  backgroundColor: 'tomato'
    },
    maintext: {
        fontSize : 16,
        margin: 20,
    },
});