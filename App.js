import * as React from 'react';
import SplashScreen from 'react-native-splash-screen'
import {Dimensions} from 'react-native';
import {Text, View, StyleSheet, Image, Alert} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function App() {
   SplashScreen.hide();
  
  
  return (
    <View>
     <View style={styles.gridItem}>
    
 <Text style={styles.centerItem}> connect</Text>
  
 </View>
  
 </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    position: 'absolute',
    fontSize: 2,
 
   top: windowWidth * 0.8 * 0.7,  
    alignItems: 'center',
     width: windowWidth * 0.8,
     height: windowHeight * 0.8,
     fontFamily: 'Quicksand-Medium',
    left: 35,
     
  },
   
  centerItem: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 55,
    position: 'absolute',
top:100
    
  },
 
});
export default App;
