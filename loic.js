//JE récupère mon boutton qui génére les groupes aléatoires
var teamGen = document.getElementById("teamGen");

//Je déclare une variable qui contient un tableau avec les prenoms de toute la classe
var stagiaires=["Maxime","Valentin","Alexandre","Yohan","Lorenzo","Fanny","Laurene","Marylise","Nouredine","Maïalen","Sidney,Lucas","Juan"];

//Evenement qui se déclenche lors d'un click boutton
teamGen.addEventListener("click", (e)=> {
    e.preventDefault();

//Vider table groupe 1 pour ne pas cumuler les groupes
document.getElementById("groupe1").innerHTML = "";
//Vider table groupe 2 pour ne pas cumuler les groupes
document.getElementById("groupe2").innerHTML = "";


//Duplication de mon tableaux, qui sera utilisé par la suite pour héberger le groupe 1
var stagiairesRestants=stagiaires.slice(0);

//Création de mon deuxieme tableau ou je pousse les noms et qui hébergera le groupe 2
huitAleatoires=["Tamara","Vincent"];

/* Pousser un élément du tableau aléatoirement choisis tant que le tableau est inferieur a 7*/
while (huitAleatoires.length<7) huitAleatoires.push(stagiairesRestants.splice(Math.floor(Math.random()*stagiairesRestants.length),1)[0]);
/*Création de cellules où stocker les noms de chaque groupe*/
var newGroupe1 = document.createElement("td");
document.getElementById("groupe1").appendChild(newGroupe1).innerHTML = stagiairesRestants;
var newGroupe2 = document.createElement("td");
document.getElementById("groupe2").appendChild(newGroupe2).innerHTML = huitAleatoires;

});

/* Fonction pour vider la table lors du click*/
myResetTable.addEventListener("click", (e)=> {
    e.preventDefault();

//Vider table groupe 1
document.getElementById("groupe1").innerHTML = "";
//Vider table groupe 2
document.getElementById("groupe2").innerHTML = "";

});

