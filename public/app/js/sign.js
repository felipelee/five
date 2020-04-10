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

//get elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnLogout = document.getElementById('btnLogout');

//Add login event
btnLogin.addEventListener('click', e => {
  //get email and password
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  //signin
   auth.signInWithEmailAndPassword(email,
    pass).then(response => {
      if (response.user) {
        window.location.href='index.html';
      } else{
        console.log('signin failed')
      }
    })
});

//addsignout
//firebase.auth().signOut().then(function() {  }, function(error) {   });


//Add realtime listener
