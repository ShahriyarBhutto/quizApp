 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
 


 import { getDatabase, ref, push, set, remove, onValue} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";


 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional

 const firebaseConfig = {
  apiKey: "AIzaSyCJghTvwb8ykbQZiiKf-3djuk72gZ25lEo",
  authDomain: "quizappjavascript-f5cb8.firebaseapp.com",
  projectId: "quizappjavascript-f5cb8",
  storageBucket: "quizappjavascript-f5cb8.appspot.com",
  messagingSenderId: "88511518362",
  appId: "1:88511518362:web:5be6ab87721f59488fb123",
  measurementId: "G-3F719R7JWY"
};

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 // Create a new post reference with an auto-generated id
 const db = getDatabase();

//  var questionV = document.getElementById("questionV");
 var option2V = document.getElementById("option2V")
 var option1V = document.getElementById("option1V")
 var option3V = document.getElementById("option3V")
 var option4V = document.getElementById("option4V")
 var correctOptionV = document.getElementById("correctOptionV")

var btnSubmit = document.getElementById("btnSubmit")
var removeBtn = document.getElementById("removeBtn")
// var readData = document.getElementById("readData")
// var backToQuiz = document.getElementById("backToQuiz")

var questionNumber  = document.getElementById("questionNumber")



var quizQuestions = {

}

var questionCount = 1;


//////**********FUnction FOr Saving  Data TO Database With key Using Push method******/
function sendData(quizObj){
  var conditionInputArray = [questionV.value,option1V.value,option2V.value,option3V.value,option4V.value,correctOptionV.value];
  console.log(conditionInputArray)
  // conditionInputArray.every((item) => {
  //   console.log(item.length)
  //   if(item.length <= 0){
  //     console.log("length is less than 0")
  //     return false
  
  //     // return
      
  //   }
  //   return true;
  // })

  for(var i = 0; i < conditionInputArray.length; i++){
      if(conditionInputArray[i].length <= 0){
        console.log("less than 0")
        alert("kindly Fill All Input Fields")
        return
      }


  }
  
  console.log("code after input condition")
  // if(questionV.value.length < 0 || option1V.value)
  const obj = push(ref(db,'QuizDatabase')).key;         //Here it create a unique key for every record using push method 
  quizQuestions.id = obj;
  const referenceDatabase = ref(db, 'QuizDatabase/'+obj);
  set(referenceDatabase,quizObj);
  questionCount++;
  // questionNumber.innerHTML = questionCount;

  conditionInputArray.forEach((item,index) => {      ///Empty Array using forEach
    conditionInputArray[index] = ""
  })
  upDateDom()
//console.log(conditionInputArray)
}

////****** Saving Input Field Data to Real Firebasde Database */
btnSubmit.addEventListener('click', () => {
      quizQuestions.question = questionV.value;
      quizQuestions.options = [option1V.value,option2V.value,option3V.value,option4V.value];
      quizQuestions.correctOption = [correctOptionV.value]
      sendData(quizQuestions)
    }
  )

// readData.addEventListener('click',() =>  {
//     const postListRef = ref(db, 'QuizDatabase');
//     onValue(
//     postListRef,
//       function (snapshot) {
//         // // patientsList.innerHTML = "";
//         var arr = [];
//         // // snapshot.forEach(function (list) {
//         // //   arr.push(list.val());
//         // // });
//         // // renderList(arr);
//         // console.log(snapshot.val())
//         // console.log(typeof(snapshot))
//         // var arr = [];
//         snapshot.forEach(function (list) {
//           console.log(list.val())
//           arr.push(list.val());
//         });
//         console.log(arr)
//         // console.log(arr)
//         // var arr = snapshot.val();
        
//       },
//       {
//         onlyOnce: false,
//       }
//     );
// })
  
removeBtn.addEventListener('click',() => {

    remove(ref(db, 'QuizDatabase'))
    console.log("hello")
    console.log(ref(db, 'QuizDatabase'))
    alert("Successfully Removed All Data From Firebase Database")

})

function upDateDom(){
   questionV.value = ""
   option1V.value = ""
   option2V.value = ""
   option3V.value = ""
   option4V.value = ""
   correctOptionV.value = ""
}

// backToQuiz.addEventListener('click', () => {
//     window.location.assign('quizapp.html')


// })