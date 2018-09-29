import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAnwxefeD14VxuS1HhSUkSG_559Fmv4vPs',
  authDomain: 'dayartdesign-2018.firebaseapp.com',
  databaseURL: 'https://dayartdesign-2018.firebaseio.com',
  projectId: 'dayartdesign-2018',
  storageBucket: 'dayartdesign-2018.appspot.com',
  messagingSenderId: '55413573899'
};

export default firebase.initializeApp(config);
