//Création d'un tableau vide qui hébergera les prénoms des coéquipiers
var tableName = [];

//Je récupère mon input des noms validés
var validerName = document.getElementById("validername");



//événement lorsqu'on clique sur validername
validerName.addEventListener("click", (e)=> {
    e.preventDefault();

//Je récupère mon input texte des noms ( valeur)
var enterName = document.getElementById("entername").value;


//On créé une cellule dans notre table et on le relie à notre ligne au travers de son id, ensuite on affiche les prénoms entrés dans ce nouveau élément 
var newtr = document.createElement("p");
document.getElementById("monEquipe").appendChild(newtr).innerHTML = enterName;

//pousser la valeur dans le tableaux
tableName.push(enterName);
console.log(tableName);

});
 
var teamGen = document.getElementById("teamGen");

teamGen.addEventListener("click", (e)=> {
    e.preventDefault();

 


//duplication de mon tableaux
var nameRest = tableName.slice(0);

//creation de mon deuxieme tableau ou je pousse les noms 
var namePush =[];
/* Pousser un élément du tableau aléatoirement choisis tant que le tableau est inferieur a 7*/
while (namePush.length<nameRest.length) namePush.push(nameRest.splice(Math.floor(Math.random()*nameRest.length),1)[0]);

//afficher nos deux tableaux pour l utilisateur

var newGroupe1 = document.createElement("p");
document.getElementById("groupe1").appendChild(newGroupe1).innerHTML = nameRest;
var newGroupe2 = document.createElement("p");
document.getElementById("groupe2").appendChild(newGroupe2).innerHTML = namePush;});

/* Fonction pour vider la table*/
myResetTable.addEventListener("click", (e)=> {
    e.preventDefault();

document.getElementById("allGroup").innerHTML = "";
document.getElementById("groupe1").innerHTML = "";
document.getElementById("groupe2").innerHTML = "";



});

myResetParticipants.addEventListener("click", (e)=> {
    e.preventDefault();

document.getElementById("monEquipe").innerHTML = "";
});