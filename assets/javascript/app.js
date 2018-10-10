$(document).ready(function(){
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA4XMskqlEQKphIR4NSV8OLk7ehAW-mg4U",
    authDomain: "train-scheduler-7f6d1.firebaseapp.com",
    databaseURL: "https://train-scheduler-7f6d1.firebaseio.com",
    projectId: "train-scheduler-7f6d1",
    storageBucket: "",
    messagingSenderId: "603831922120"
  };
  firebase.initializeApp(config);

  var database= firebase.database();
  var trainList= database.ref("/list-of-trains");


  var trainName= "";
  var trainDestination = "";
  var trainFirstTime = "";
  var trainFrequency = "";
  var minutesAway = "";

  $(document).on('click', '#trainSubmit', function(e){
      trainName = $('#Train-Name').val().trim();
      trainDestination = $('#Train-Destination').val().trim();
      trainFirstTime = $('First-Train-Time').val().trim();
      trainFrequency = $('#Train-Fequency').val().trim()
  })






})