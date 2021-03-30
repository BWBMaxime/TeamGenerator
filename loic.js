/*
var huitAleatoires = document.getElementById("huitAleatoires")
var stagiairesRestants = document.getElementById("stagiairesRestants")*/

//Je déclare une variable qui contient un tableau avec les prenoms de toute la classe
var stagiaires=["Maxime","Valentin","Alexandre","Yohan","Lorenzo","Fanny","Laurene","Marylise","Nouredine","Maïalen","Sidney","Lucas","Juan"];

var stagiairesRestants=stagiaires.slice(0);// Dupliquer le tableau pour tirages avec suppression

// mon tableaux des 6 personnes aléatoire mardi et jeudi en presentiel dont vincent et tamara deja placer
huitAleatoires=["Tamara","Vincent"];

/* Pousser un élément du tableau aléatoirement choisis tant que le tableau est inferieur a 7
while (huitAleatoires.length<7) huitAleatoires.push(stagiairesRestants.splice(Math.floor(Math.random()stagiairesRestants.length),1)[0]);*/
