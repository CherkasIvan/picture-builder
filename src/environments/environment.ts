import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyCazlcZEhdXkBlVf2HxASNWj8UbPnomAM8',
    authDomain: 'builder-app-e09bc.firebaseapp.com',
    databaseURL: 'https://builder-app-e09bc-default-rtdb.firebaseio.com',
    projectId: 'builder-app-e09bc',
    storageBucket: 'builder-app-e09bc.appspot.com',
    messagingSenderId: '930933291394',
    appId: '1:930933291394:web:b711a5120e958bf078b79b',
    measurementId: 'G-LR3WQB8WCQ',
  },
};

const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);
