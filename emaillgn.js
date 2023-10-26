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

  //   enable alert
  document.querySelector(".alert").style.display = "block"

  // remove the alert
  setTimeout(() =>{
    document.querySelector(".alert").style.display = "none";


  }, 3000);

  // reset the form
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

const authForm = document.getElementById('auth-form');

authForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission behavior

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Use Firebase Authentication to sign up or sign in
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User successfully signed up or signed in
      const user = userCredential.user;
      // You can perform further actions like redirecting the user or updating UI
    })
    .catch((error) => {
      // Handle errors (e.g., invalid email, password too short, etc.)
      console.error(error.message);
    });
});
// Listen for changes in user authentication state
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in
    console.log("User is signed in:", user.email);
    // You can perform actions for authenticated users here
  } else {
    // User is signed out
    console.log("User is signed out");
    // You can perform actions for signed-out users here
  }
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in; you can access user information here
    // Example: Show the user's name and a "Sign Out" button
    document.getElementById('user-info').innerHTML = `Hello, ${user.displayName}! <button onclick="signOut()">Sign Out</button>`;
  } else {
    // No user is signed in; user is logged out
    // Example: Show a "Sign In" button
    document.getElementById('user-info').innerHTML = '<button onclick="signIn()">Sign In</button>';
  }
});

function signOut() {
  firebase.auth().signOut()
    .then(() => {
      // Sign-out successful; you can update the UI as needed
    })
    .catch((error) => {
      // An error occurred while signing out
      console.error(error.message);
    });
}

function signIn() {
  // Handle user sign-in logic (e.g., show a sign-in form)
}
// Assuming you have a button with id "signOutBtn" for signing out
const signOutBtn = document.getElementById("signOutBtn");

// Add an event listener to the sign-out button
signOutBtn.addEventListener("click", () => {
    // Sign out the user
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        // You can update the UI or perform any other actions here.
        console.log("User signed out");
        // For example, you can redirect to a sign-in page or update the UI.
        // window.location.href = "signin.html"; // Redirect to a sign-in page
        // updateUIAfterSignOut(); // Update the UI after sign-out
    }).catch((error) => {
        // An error happened.
        console.error("Sign-out error", error);
    });
});

// Assuming you have a button with id "signInBtn" for signing in
const signInBtn = document.getElementById("signInBtn");

// Add an event listener to the sign-in button
signInBtn.addEventListener("click", () => {
    // You can customize this part to display a sign-in form/modal
    // or navigate to a sign-in page.
    // For example, you can display a sign-in form when the button is clicked.
    // showSignInForm();
    // Or navigate to a sign-in page:
    // window.location.href = "signin.html";
});



