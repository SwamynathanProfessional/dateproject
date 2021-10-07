import * as React from 'react';
import SplashScreen from 'react-native-splash-screen'
import { useState } from 'react';
import {
  DeviceEventEmitter,
  NativeAppEventEmitter,
  Platform,
} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import SoundPlayer from 'react-native-sound-player'
import {View, StyleSheet, Button, Text} from 'react-native';
function App() {
  const EventEmitter = Platform.select({
    ios: () => NativeAppEventEmitter,
    android: () => DeviceEventEmitter,
  })();
   SplashScreen.hide();
   EventEmitter.addListener('backgroundTimer', () => {
    // this will be executed once after 5 seconds
    console.log('toe');
});
   const [visible, setvisible] = useState(true);
  
   
   const onRun=() =>{
    BackgroundTimer.start(10);
   }

   const onCancel=() =>{
    BackgroundTimer.stop();
   }
    const Banner=() =>{
      setTimeout(() => {
        setvisible(false);
      }, 10000);
      return(
    
<View style={styles.container}>

<Text style={styles.text}>Incoming Call</Text>

<Button title='Accept' style={styles.box} color='#ff7f50'></Button>

<Button title='Cancel' style={styles.box} color='#ff7f50'></Button>

</View>
      );



    }
  

 
  return (
    <View style={{flex: 1}}>
    <Button title='Accept' style={styles.box} color='#ff7f50' onPress={onRun}></Button>

    <Button title='Cancel' style={styles.box} color='#ff7f50' onPress={onCancel}></Button>
  </View>
   
   
  
  );
}

const styles = StyleSheet.create({
   
   container: {
   height: '13%',
 width:'100%',
backgroundColor: 'black',
justifyContent: 'space-around',
alignItems: 'center',
flexDirection: 'row',
   },

   text:{
     textAlign: 'left',
     color: '#f8f8ff',
   },
   box: {
     color: '#ff8c00',
    width: 50,
    height: 100,
    alignSelf: 'center',
     
  },
 
});
export default App;
