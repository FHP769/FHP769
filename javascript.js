//Function pour les valeurs randoms
var randomNumber;

//Boolean pour les login
var bolLogin = false;
var nologinbanner = false;

//Invocation de la function issue de l'event trigger 'OnClick' depuis le HTML
// Recuperation des elements stockees dans les cases a username etc
// Regarde si l'utilisateur a entree des donnees
function userQuery() {
  //Username info

  document.location.reload();
  
  var firstName = document.getElementById("input-Prenom").value;
  var lastName = document.getElementById("input-Nom").value;
  var email = document.getElementById("input-email").value;

  document.location.reload();

  if (firstName !== "" && lastName !== "" && email !== "") {
    bolLogin = true;
    functionrandomUrl();
  } else {
    nologinbanner = true;
  }
}

// Est invoquer depuis UserQuery si des informations sont entree
// Cherche le ficher Json, le convertis en objet javascript
// Utilisation de la function Math de javascript pour generer une url aleatoire
function functionrandomUrl() {
  fetch("Data/data.json")
    .then((response) => response.json())
    .then((data) => {
      let urlDatabase = data.urlDatabase;

      if (bolLogin === true) {
        var randomNumber = Math.round(Math.random() * urlDatabase.length);
        var randomUrl = urlDatabase[randomNumber];
        window.open(randomUrl, (target = "_blank", rel="noopener noreferrer"));
        document.getElementById("RN").value = randomNumber;
      }
    });
}
