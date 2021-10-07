/**
 * @format
 */
 
import {AppRegistry} from 'react-native';
import App from './App';
import OneSignal from 'react-native-onesignal';
import {name as appName} from './app.json';

OneSignal.setLogLevel(6, 0);
OneSignal.setAppId('8bc8c659-30f9-4feb-acd5-b0de11ead8be');
OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
  console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
  let notification = notificationReceivedEvent.getNotification();
  console.log("notification: ", notification);
  const data = notification.additionalData
  console.log("additionalData: ", data);
  // Complete with null means don't show a notification.
  notificationReceivedEvent.complete(notification);
});

//Method for handling notifications opened
OneSignal.setNotificationOpenedHandler(notification => {
  console.log("OneSignal: notification opened:", notification);
});
AppRegistry.registerComponent(appName, () => App);
