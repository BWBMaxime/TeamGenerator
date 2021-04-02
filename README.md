# MG_TA_TEAMGEN

L'objectif de ce TP est de créer un générateur de groupe présentiel/distanciel aléatoire qui aura deux fonctionnalités :

- Ajout des participants et création de deux groupes aléatoires. Outil destiné à n'importe quel utilisateur

- Générateur de 2 groupes aléatoires pour notre promotion. Outil destiné à Loic

**Organisation**

- Création d'un conteneur HTTPD où pouvoir travailler

- Création d'un dossier GIT dans l'espace collaboratif - pull chaque matin et push chaque soir sur GIT 

- Création d'une branche master qui va héberger le projet final

- Création d'une branche HTML puis création de notre index.HTML où on travaillera la partie HTML

- A partir de cette branche HTML, création de notre branche JS et CSS, où l'on travaillera ces parties


**Fonctionnement**

- Réflexion commune pour la partie HTML, CSS et JS et réparition des tâches

- Réalisation commune de la partie HTML

- Réalisation répartie pour la partie CSS et JS, tenant compte que le CSS sera éfectué en dernier

- Chaque soir il faudra réaliser un push de notre travail dans le dossier GIT

- Lorsque le projet sera fini, réaliser un push final de tous les élements vers la branche master locale et distante

- Lors des doutes ou problématiques, la priorité lors de la demande d'aide sera : recherche dans la documentation -> binôme -> camarades -> Loic






### RETOUR UTILISATEUR

La page LoïcGen est plutôt... moche, et pas responsive (à l'image de Loïc)

Sinon au niveau de la génération aléatoire la version automatique devrait être la seule présente puisqu'il s'agit de la version la plus pratique, beaucoup plus pratique que de rentrer les noms à la main (même si ça pourrait être intéressant dans un autre contexte)

L'interface principale est plutôt bien niveau design, responsive, et elle documente clairement les étapes à suivre.

Problème, l'affichage des images ne fonctionne pas (à part pour les logos de loupes et de calendrier), pour une raison inconnue.

Aussi, les groupes générés ne remplacent pas les anciens résultats et se rajoutent aux anciens résultats, ce qui en plus casse votre design.

Ça peut se régler en définissant le innerHTML de votre cible sur ' ' (une chaîne de caractères vide) pour effacer le contenu, avant de rajouter le nouveau résultat.

Bref, bien foutu dans l'ensemble et pour le temps imparti.