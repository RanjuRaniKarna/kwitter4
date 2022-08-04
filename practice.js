const firebaseConfig = {
    apiKey: "AIzaSyAhgvYGWvVUTkUDfBQStap8YnnnVWT-rPA",
    authDomain: "kwitterdb-ce950.firebaseapp.com",
    databaseURL: "https://kwitterdb-ce950-default-rtdb.firebaseio.com",
    projectId: "kwitterdb-ce950",
    storageBucket: "kwitterdb-ce950.appspot.com",
    messagingSenderId: "670305074171",
    appId: "1:670305074171:web:bd7fbbc76a72511074e95e",
    measurementId: "G-W5R9STNMSF"
  };
  

  firebase.initializeApp(firebaseConfig);

function adduser(){
    var name = document.getElementById('input1').value;
    console.log(name);
    firebase.database().ref("/").child(name).update({ purpose : "adding user name" });
}