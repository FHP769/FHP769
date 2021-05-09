//Function pour les valeurs randoms
var randomNumber;

//Invocation de la function issue de l'event trigger 'OnClick' depuis le HTML
// Recuperation des elements stockees dans les cases a username etc
// Regarde si l'utilisateur a entree des donnees
function userQuery(firstName, lastName, email) {
  if (firstName !== "" && lastName !== "" && email !== "") {
    functionrandomUrl();
    stpage();
  } else {
    loginRequired();
  }
}

// Cherche le ficher Json, le convertis en objet javascript
// Utilisation de la function Math de javascript pour generer une url aleatoire
function functionrandomUrl() {
  fetch("Data/data.json")
    .then((response) => response.json())
    .then((data) => {
      let urlDatabase = data.urlDatabase;

      var randomNumber = Math.round(Math.random() * urlDatabase.length);
      var randomUrl = urlDatabase[randomNumber];

      if( /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        window.location.assign(randomUrl);
       }
       else if( /Chrome|Mozilla|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        window.open(randomUrl, (target = "_blank"))
       };
    });
}

//Informations sur les utilisateur, ou les infos vont pouvoir etre recuperer
function userInfo() {
  let userInput1 = document.getElementById("input-Prenom").value;
  let userInput2 = document.getElementById("input-Nom").value;
  let userInput3 = document.getElementById("input-email").value;
  userQuery(userInput1, userInput2, userInput3);
}


 /* Message d'error pas login */
function loginRequired() {

  indexd = 8550;
  document.getElementById('popCo').style.display = "unset";

  if( /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.getElementById('popCo').style.position = "relative";
    document.getElementById('popCo').style.height = "95%";
    document.getElementById('popCo').style.width = "95%";
    document.getElementById('popCo').style.justifyItems = "center";
    document.getElementById('popCo').style.marginTop = "10%";
    document.getElementById('popCo').style.backgroundColor= "rgba(231, 74, 26, 0.815)";
   }
/* Trigger cancel au bout de 8550s cancel le message */
  setInterval(cancel, indexd);
  function cancel() {
    document.getElementById("popCo").style.display = "none";
    window.location.reload()
  }
}
/* Trigger quand les informations box sont cliquer et cancel le message */
let inputelem = document.getElementById("input-Prenom");
let inputelem2 = document.getElementById("input-Nom");
let inputelem3 = document.getElementById("input-email");

inputelem.addEventListener("click", inputchecker1);
inputelem2.addEventListener("click", inputchecker1);
inputelem3.addEventListener("click", inputchecker1);
function inputchecker1() {
  document.getElementById("popCo").style.display = "none";
}
