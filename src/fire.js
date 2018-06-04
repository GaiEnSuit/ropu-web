import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBXwrr9WfC0Hw6ATIwEVRJhUEM-uwPXAxA",
    authDomain: "ropu-453a6.firebaseapp.com",
    databaseURL: "https://ropu-453a6.firebaseio.com",
    projectId: "ropu-453a6",
    storageBucket: "ropu-453a6.appspot.com",
    messagingSenderId: "997455488219"
};

var fire = firebase.initializeApp(config);

export default fire;