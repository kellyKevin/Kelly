const firebaseConfig = {
  apiKey: "AIzaSyBk_55iuyj_3PYCIw8UNdf521oTxlk6DC0",
  authDomain: "kelly-s-1fe05.firebaseapp.com",
  databaseURL: "https://kelly-s-1fe05-default-rtdb.firebaseio.com",
  projectId: "kelly-s-1fe05",
  storageBucket: "kelly-s-1fe05.appspot.com",
  messagingSenderId: "992365918258",
  appId: "1:992365918258:web:7dac291538e4389273e42b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference your database
var contactFormDB = firebase.database().ref("contactform");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var name = getElementVal('name');
  var emailid = getElementVal('emailid');
  var msgContent = getElementVal('msgcontent');

  saveMessage(name, emailid, msgContent);

  // Enable alert
  document.querySelector(".alert").style.display = "block";

  // Remove the alert after 3 seconds
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Reset the form
  document.getElementById("contactForm").reset();
}

const saveMessage = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

  