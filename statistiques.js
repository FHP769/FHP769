
let articleNumber = 0;

/* Statistique ajoute +1 au nombre de fois cliquer sur le boutton */
function stpage(){

    articleNumber++;
    document.querySelector('#statspress').innerHTML = articleNumber;

};