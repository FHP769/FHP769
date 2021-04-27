//Random number value
var randomNumber;

//login Bool
var bolLogin = false;
var nologinbanner = false;

//Login + search
function userQuery(){

  //Username info
  var firstName = document.getElementById('input-Prenom').value;
  var lastName = document.getElementById('input-Nom').value;
  var email = document.getElementById('input-email').value;

  if (firstName !== '' && lastName !== '' && email !== '')
  {
    bolLogin = true;
    functionrandomUrl();
  }
  else
  {
    nologinbanner = true;
  
  }
}

// Charge onClick function, puis cherche le ficher Json pour ensuite convertir les Url en Random number
function functionrandomUrl(){

fetch("Data/data.json").then(response => response.json())
.then(data => {
  let urlDatabase = data.urlDatabase;

  if (bolLogin === true) {
        var randomNumber = Math.round(Math.random() * urlDatabase.length);
        var randomUrl = urlDatabase[randomNumber];
        window.location.href = randomUrl;
        document.getElementById("RN").value = randomNumber;
        console.log('this')
      }
})}

