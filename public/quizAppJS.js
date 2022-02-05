 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
 import { getDatabase, ref, push, set, remove, onValue} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";

////////////////Connect Database////////////////////////

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

  var questionDisplay = document.getElementById("questionDisplay")
  var optionsDisplay = document.getElementById("optionsDisplay")
  var currentValue = document.getElementById("currentValue")
  var totalValuue = document.getElementById("totalValuue")
  var resultDiv = document.getElementById("resultDiv")
  var totalScore = document.getElementById("totalScore")
  var questionDiv = document.getElementById("questionDiv")
  var nextValue = 0;
  var score = 0;
  var progr = document.querySelector("#pro")
  var quizQuestions = []



 window.getPatientsList = function () {
    onValue(
      dbRef,
      function (snapshot) {
        patientsList.innerHTML = "";
        console.log(snapshot.val())
        var arr = [];
        snapshot.forEach(function (list) {
          arr.push(list.val());
        });
        console.log(arr)
        renderList(arr);
      },
      {
        onlyOnce: false,
      }
    );
  };
  




function dataReadingDatabase(){

    const postListRef = ref(db, 'QuizDatabase');
    onValue(
        postListRef,
        function (snapshot) {
                console.log(snapshot.val())
                snapshot.forEach(function (list) {
                    console.log(list.val())
                    quizQuestions.push(list.val());
                });           
                 console.log(quizQuestions)
                 console.log(snapshot.val())
                //  console.log(quizQuestions[1].question)
                 quizQuestionsFunction();                
            },
            {
                onlyOnce: false,
            }
            );
        }
            
dataReadingDatabase()

function quizQuestionsFunction (){
    questionDisplay.innerHTML = quizQuestions[nextValue].question;

    for(var i = 0 ; i < quizQuestions[nextValue].options.length;i++){

        optionsDisplay.innerHTML += `<div class='col-md-6 my-2'><button onclick ="optionsBtnTriger('${quizQuestions[nextValue].options[i]}','${quizQuestions[nextValue].correctOption}')" class='btn btn-outline-dark w-100'>${quizQuestions[nextValue].options[i]}</button></div>`
    }
    totalValuue.innerHTML = quizQuestions.length;
    currentValue.innerHTML = nextValue + 1;
    console.log(optionsDisplay)
}

console.log(nextValue)

window.nextMCQS = function(){
    nextValue++;
    if(nextValue == quizQuestions.length){
        questionDiv.style.display = 'none'
        resultDiv.style.display = 'block';
        // optionsDisplay.innerHTML = ""
        optionsDisplay.innerHTML = ""
        console.log(questionDiv)
        console.log(resultDiv)
        totalScore.innerHTML = score;
        
    }else{
        optionsDisplay.innerHTML = ""
        quizQuestionsFunction()
        progr.value = nextValue;
        console.log(progr)
    }
    console.log(nextValue)
    console.log(quizQuestions.length)
}

window.optionsBtnTriger = function (currentValue,actualValue){
    console.log(currentValue,actualValue)
    if(currentValue == actualValue){
        score++   

    }
    nextMCQS()

}


