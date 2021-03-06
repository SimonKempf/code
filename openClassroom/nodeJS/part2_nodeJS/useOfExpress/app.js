var express = require('express');

var app = express(); // objet app en appelant la fonction express()

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes à l\'accueil, que puis-je pour vous ?');
});

app.get('/sous-sol', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes dans la cave à vins, ces bouteilles sont à moiiiii !');
});

app.get('/etage/1/chambre', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hé ho, c\'est privé ici !');
});

// app.get('/etage/:etagenum/chambre', function(req, res) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Vous êtes à la chambre de l\'étage n°' + req.params.etagenum);
// });

// avec EJS :
app.get('/etage/:etagenum/chambre', function(req, res) {
    res.render('chambre.ejs', {etage: req.params.etagenum});   //Ce code fait appel à un fichier chambre.ejs qui doit se trouver dans un sous-dossier appelé "views".
});
// (La balise<%= etage %>sera remplacée par la variable etage que l'on a transmise au template avec{etage: req.params.etagenum} )



// faire une application qui compte jusqu'à un nombre envoyé 
// en paramètre et qui affiche un nom au hasard au sein d'un tableau
app.get('/compter/:nombre', function(req, res) {
    var noms = ['Robert', 'Jacques', 'David'];
    res.render('page.ejs', {compteur: req.params.nombre, noms: noms});
});






app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page introuvable !');
});

//Express vous permet de gérer des routes dynamiques, 
//c'est-à-dire des routes dont certaines portions peuvent varier. 
//Vous devez écrire:nomvariabledans l'URL de la route, ce qui aura pour 
//effet de créer un paramètre accessible depuisreq.params.nomvariable. Démonstration :




app.listen(8080);