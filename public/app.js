//  // Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
//  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
//  // TODO: Add SDKs for Firebase products that you want to use
//  // https://firebase.google.com/docs/web/setup#available-libraries

//  // Your web app's Firebase configuration
//  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//  const firebaseConfig = {
//    apiKey: "AIzaSyBhPbbuQsd3AKqyw0yX7hsdvL1mkyKHw9I",
//    authDomain: "signupform-e146f.firebaseapp.com",
//    projectId: "signupform-e146f",
//    storageBucket: "signupform-e146f.appspot.com",
//    messagingSenderId: "908862464429",
//    appId: "1:908862464429:web:d09afd9f902f4045bc4124",
//    measurementId: "G-MN88NJHZZN"
//  };

//  // Initialize Firebase
//  const app = initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);


 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js"

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";


var emailSignIn = document.getElementById("emailSignIn")
var passwordSignIn = document.getElementById("passwordSignIn")
var loginBtn = document.getElementById("loginBtn")
var adminClick = document.getElementById("adminClick")



 const firebaseConfig = {
   apiKey: "AIzaSyBhPbbuQsd3AKqyw0yX7hsdvL1mkyKHw9I",
   authDomain: "signupform-e146f.firebaseapp.com",
   projectId: "signupform-e146f",
   storageBucket: "signupform-e146f.appspot.com",
   messagingSenderId: "908862464429",
   appId: "1:908862464429:web:d09afd9f902f4045bc4124",
   measurementId: "G-MN88NJHZZN"
 };

 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
const auth = getAuth();






adminClick.addEventListener('click',() => {
  if(emailSignIn.value == 'admin' && passwordSignIn.value == '1234'){
      window.location.replace('adminPannel.html');
      console.log("hello")
  }
  else{
    alert("Enter Correct Admin Id and Password ")
  }

})


loginBtn.addEventListener('click',()=>{

  signInWithEmailAndPassword(auth, emailSignIn.value, passwordSignIn.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location.replace("quizapp.html")
    console.log("Yes User Is Available You Can switch to another User any time")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error)
   
  });


})
