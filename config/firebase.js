const firebaseAdmin = require('firebase-admin');

// Initialize Firebase-Admin
const serviceAcount = require('./dayartdesign-2018-firebase-adminsdk-3xff2-7384113594.json');

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAcount),
  databaseURL: 'https://dayartdesign-2018.firebaseio.com'
});

module.exports = firebaseAdmin;
