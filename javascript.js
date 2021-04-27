//Random number value
var randomNumber;

//login Bool
var bolLogin = false;
var nologinbanner = false;

//Username info
var firstName;
var lastName;
var email;
var phoneNumber;

// Charge onClick function, puis cherche le ficher Json pour ensuite convertir les Url en Random number
function LoadRID(){

console.log('loading')
fetch("Data/data.json").then(response => response.json())
.then(data => {
  let urlDatabase = data.urlDatabase;

  if (bolLogin === true) {
        var randomNumber = Math.round(Math.random() * urlDatabase.length);
        var randomUrl = urlDatabase[randomNumber];
        window.location.href = randomUrl;
        document.getElementById("RN").value = randomNumber;
        console.log('this')
      }else {
        nologinbanner = true
      }

})}

// Get adress

