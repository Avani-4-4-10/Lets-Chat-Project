//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDg-TKj5TC-SlhbWRQj-2WenGWr9t8jrj8",
      authDomain: "chatapp-f985f.firebaseapp.com",
      databaseURL: "https://chatapp-f985f.firebaseio.com",
      projectId: "chatapp-f985f",
      storageBucket: "chatapp-f985f.appspot.com",
      messagingSenderId: "105859635244",
      appId: "1:105859635244:web:2d9ee1e76ba1dc1091d989"
}; // Initialize Firebase
firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("username");

function send() {
      message = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            username: user_name,
            msg: message,
            like: 0

      })
      document.getElementById("message").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id)
                        console.log(message_data)

                        name1=message_data['username']
                        message=message_data['msg']
                        like=message_data['like']

                        //End code
                  }
            });
      });
}
getData();

function Logout() {
      localStorage.removeItem("username")
      window.location = "index.html";

      localStorage.removeItem("room_name");
}