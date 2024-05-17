const firebaseConfig = {
  apiKey: "AIzaSyBTQoXKErRwbDXcuL1LUTE9ec24dUgl7tY",
  authDomain: "register-form-e4851.firebaseapp.com",
  databaseURL: "https://register-form-e4851-default-rtdb.firebaseio.com",
  projectId: "register-form-e4851",
  storageBucket: "register-form-e4851.appspot.com",
  messagingSenderId: "327946973616",
  appId: "1:327946973616:web:42ac1442c200c7ec32e675",
  measurementId: "G-4M748XY54L"
  //   copy your firebase config informations
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var registerformDB = firebase.database().ref("register form");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var fname = getElementVal("fname");
  var lname = getElementVal("lname")
  var email = getElementVal("email");
  var sex = getElementVal("sex");
  var age = getElementVal("age");
  var nationality = getElementVal("nationality");
  var number = getElementVal("number");

  saveMessages(fname, lname, email, sex, age, nationality, number);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";

    // Redirect to about.html
    window.location.href = '/frontend/about.html'

  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (fname, email, sex, age, nationality, number) => {
  var newContactForm = registerformDB.push();

  newContactForm.set({
    fname: fname,
    lname: lname,
    email: email,
    sex: sex,
    age: age,
    nationality: nationality,
    number: number,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
