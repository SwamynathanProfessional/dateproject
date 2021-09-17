import * as React from 'react';
import SplashScreen from 'react-native-splash-screen'
import {Dimensions} from 'react-native';
import { OT } from 'opentok-react-native';
import {Text, View, StyleSheet, Image, Alert} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function App() {
   SplashScreen.hide();
   const publisherProperties = {
    publishAudio: false,
    cameraPosition: 'back'
  };
  
  const publisherEventHandlers = {
    streamCreated: event => {
      console.log('Publisher stream created!', event);
    },
    streamDestroyed: event => {
      console.log('Publisher stream destroyed!', event);
    }
  };

  return (
    <OTSession apiKey="47338451" sessionId="2_MX40NzMzODQ1MX5-MTYzMTg3MTE3MDI5NX5DNHVRMmpXeVplNy9NODhtaTVkVExQSGt-fg"
     token="T1==cGFydG5lcl9pZD00NzMzODQ1MSZzaWc9Y2RkOGEzZjdjNzAzMTk4Y2Y1NWU3ZjczZjY2NzZjMjYyM2JjN2JhMTpzZXNzaW9uX2lkPTJfTVg0ME56TXpPRFExTVg1LU1UWXpNVGczTVRFM01ESTVOWDVETkhWUk1tcFhlVnBsTnk5Tk9EaHRhVFZrVkV4UVNHdC1mZyZjcmVhdGVfdGltZT0xNjMxODcxMjQ1Jm5vbmNlPTAuMjM5ODA4MzI2NTEyMzkwNDgmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTYzMTg5Mjg0NCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==">
    <OTPublisher
    
      properties={publisherProperties}
      eventHandlers={publisherEventHandlers}
      style={{ height: 400, width: 500 }}
    />
   <OTSubscriber  style={{ height: 400, width: 500 }} />
  </OTSession>
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
