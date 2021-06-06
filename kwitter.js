var firebaseConfig = {
    apiKey: "AIzaSyAcskOrfVLIwlqTiUTHlO0pCOUWUvjoOOc",
    authDomain: "classtest-a36e7.firebaseapp.com",
    databaseURL: "https://classtest-a36e7-default-rtdb.firebaseio.com",
    projectId: "classtest-a36e7",
    storageBucket: "classtest-a36e7.appspot.com",
    messagingSenderId: "707264758503",
    appId: "1:707264758503:web:561763165699db11f19842"
}



function addUser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);
    
    window.location = "kwitter_room.html";
}
