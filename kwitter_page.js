var firebaseConfig = {
      apiKey: "AIzaSyAcskOrfVLIwlqTiUTHlO0pCOUWUvjoOOc",
      authDomain: "classtest-a36e7.firebaseapp.com",
      databaseURL: "https://classtest-a36e7-default-rtdb.firebaseio.com",
      projectId: "classtest-a36e7",
      storageBucket: "classtest-a36e7.appspot.com",
      messagingSenderId: "707264758503",
      appId: "1:707264758503:web:561763165699db11f19842",
      measurementId: "G-J4KPHFZWC8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 }); document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
