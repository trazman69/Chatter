
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyAcskOrfVLIwlqTiUTHlO0pCOUWUvjoOOc",
      authDomain: "classtest-a36e7.firebaseapp.com",
      projectId: "classtest-a36e7",
      storageBucket: "classtest-a36e7.appspot.com",
      messagingSenderId: "707264758503",
      appId: "1:707264758503:web:561763165699db11f19842",
      measurementId: "G-J4KPHFZWC8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
   

      //End code
      });});}
getData();
function redirecttoRoomnames(name){
  console.log(name);
 localStorage.setItem("Room_Name",name);
 window.location="kwitter_page.html"

}
function logout(){localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html"
}


