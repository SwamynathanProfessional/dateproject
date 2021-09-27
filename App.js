import * as React from 'react';
 
import SplashScreen from 'react-native-splash-screen'
import { useEffect, useState } from 'react';
import {View, StyleSheet, Alert, Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';
function App() {
 
   SplashScreen.hide();
   useEffect(  ()  => {

   messaging()
   .hasPermission()
   .then(enabled => {
    if (enabled) {
      console.log('has permission',enabled );
      const fcmToken = messaging().getToken().then(token => {
       console.log('tokens',token);
         
      });
     
    } 
   });
    
   messaging().onTokenRefresh(token => {
        console.log('ontokenrefresh',token);
   });
    

       messaging().onMessage(async remoteMessage => {
           
        console.log('A new FCM message arrived!');
        Alert.alert(
         'A new FCM message arrived!',
         remoteMessage.notification.body,
         [
           {
             text: "Cancel",
             onPress: () => console.log("Cancel Pressed"),
             style: "cancel"
           },
           { text: "OK" }
         ]
       );
    //delete token
    //console.log('deleted token', messaging().deleteToken);
       
       
      });
  

      messaging().onNotificationOpenedApp(remoteMessage => {
         
         console.log('onNotificationOpenedApp');
         Alert.alert(
            'onNotificationOpenedApp',
            remoteMessage.notification.body,
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK"   }
            ]
          );
     //delete token
    // console.log('deleted token', messaging().deleteToken);
    
      });


      messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            
          );
          
          Alert.alert(
            'Notification caused app to open from quit state:',
            remoteMessage.notification.body,
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK" }
            ]
          );
        

        }
         //delete token
    //console.log('deleted token', messaging().deleteToken);
         
      });
  }, []);
      
    
 const onbuttonpress=()=>{
   //console.log('deleted token', messaging().deleteToken());
  firestore().collection('usertoken').get().then(querySnap=>{
  const userDevicetoken= querySnap.docs.map(docSnap=>{
     return docSnap.data().token
   })
   console.log('tokens received',userDevicetoken);
   fetch('/send-noti',{
     method: 'post',
     headers: {
       'Content-Type': 'application/json'
        
     },
     body: JSON.stringify({
       tokens:userDevicetoken
     })
   })
 })

 }
   
  
   
 
  return (
  <View>
   <Button title='click me' onPress={onbuttonpress}></Button>
  </View>
   
  );
}

const styles = StyleSheet.create({
   
   mainitem:{
   flex: 1,
  left: 40,  
  top: 30,
  position:'absolute',    
  justifyContent: 'center',
  flexDirection: 'column', 
   }
 
});
export default App;
