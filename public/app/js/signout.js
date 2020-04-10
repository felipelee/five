// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA6FDP3ilfzn1rbGC0huoP0jyyNEOQx7uI",
  authDomain: "highfive-2f8f6.firebaseapp.com",
  databaseURL: "https://highfive-2f8f6.firebaseio.com",
  projectId: "highfive-2f8f6",
  storageBucket: "highfive-2f8f6.appspot.com",
  messagingSenderId: "489520943186",
  appId: "1:489520943186:web:7fd387b7d2ba5548fecf8b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);





//Add realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser);
    window.location.href = 'index.html';
  } else {
    console.log('not logged in');
  }

$('#logoutBtn')addEventListener('click', e => {
//addsignout
firebase.auth().signOut().then(function() {
window.location.href = 'sign-in.html';
}, function(error) {});

});




});
