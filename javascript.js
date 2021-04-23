
var randomNumber;
var bolLogin

var firstName;
var lastName;
var email;
var phoneNumber;


var urlDatabase = [
    "https://www.francebleu.fr/emissions/ca-va-dans-le-bon-sens-en-poitou/poitou/quel-est-l-impact-du-changement-climatique-sur-les-migrations-d-oiseaux-marins",
    "https://www.terrafemina.com/article/environnement-pourquoi-2021-est-une-annee-cruciale-pour-agir_a357981/1",
    "https://www.franceinter.fr/monde/rechauffement-climatique-2020-est-l-annee-la-plus-chaude-jamais-enregistree-en-europe",
    "https://www.latribune.fr/entreprises-finance/transitions-ecologiques/la-planete-toujours-vers-un-rechauffement-de-3-c-malgre-la-pandemie-865456.html",
    "https://www.lci.fr/environnement-ecologie/rechauffement-climatique-la-terre-ne-sera-pas-sauvee-sans-contribution-de-l-inde-2183958.html",
    "https://vivredemain.fr/2021/03/26/le-rechauffement-climatique-est-catastrophique-en-russie/",
    "https://www.consoglobe.com/rechauffement-climatique-fonte-iceberg-cg",
    "https://www.futura-sciences.com/tech/actualites/technologie-visualisez-acceleration-rechauffement-climatique-google-earth-86843/",
    "https://www.argusdelassurance.com/green-assurance/rechauffement-climatique/catastrophes-naturelles-une-annee-2020-tres-couteuse-pour-l-assurance-mondiale.180584"

]

function LoadRID(){
   var randomNumber = Math.round(Math.random() * urlDatabase.length);
   var randomUrl = urlDatabase[randomNumber];
   window.location.href = randomUrl;
   document.getElementById("RN").value=randomNumber;
  //console.log(randomNumber)
};

function isLoged(){



}