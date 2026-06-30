/**
 * @format
 * Entry point for web (React Native Web + Metro).
 * Uses AppRegistry directly to avoid the broken expo package main field.
 */
import { AppRegistry } from 'react-native';
import App from './App';

try {
  const messaging = require('@react-native-firebase/messaging').default;
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Background message:', remoteMessage);
  });
} catch (e) {
  console.warn('Firebase background handler failed to register:', e);
}

AppRegistry.registerComponent('main', () => App);

// Web-only: mount to #root
if (typeof document !== 'undefined') {
  AppRegistry.runApplication('main', {
    rootTag: document.getElementById('root') || document.getElementById('app'),
  });
}