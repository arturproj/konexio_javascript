// Challenge
// On va créer un programme qui s’appelle moreOrLess.

// Créer un dossier moreOrLess. A l’intérieur, faîtes un

// npm init
// Une fois fait, installer le package prompt avec

// npm install prompt
// Et créer un fichier index.js dans le dossier moreOrLess

// Le principe est le suivant.

// L’ordinateur tire au sort un nombre entre 1 et 100.

// Il vous demande de deviner le nombre. Vous entrez donc un nombre entre 1 et 100. 
// L’ordinateur compare le nombre que vous avez entré avec le nombre “mystère” qu’il a tiré au sort. 
// Il vous dit si le nombre mystère est supérieur ou inférieur à celui que vous avez entré.

// Puis l’ordinateur vous redemande le nombre… Et il vous indique si le nombre mystère est supérieur ou inférieur. 
// Et ainsi de suite, jusqu’à ce que vous trouviez le nombre mystère. Le but du jeu, bien sûr, 
// est de trouver le nombre mystère en un minimum de coups.

// Voici un exemple

// Quel est le nombre ? 50
// C'est plus !
// Quel est le nombre ? 75
// C'est plus !
// Quel est le nombre ? 85
// C'est moins !
// Quel est le nombre ? 80
// C'est plus !
// Quel est le nombre ? 83
// C'est moins !
// Quel est le nombre ? 82
// Bravo, vous avez trouve le nombre mystère !!!

var readline = require('readline'),
rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('Quel est le nombre ? ');
rl.prompt();
const i =  Math.floor(Math.random() * (100 - 1)) + 1;;

rl.on('line', function(line) {
    console.log( line.trim() )
    if( parseInt(line.trim()) ){
      if( line.trim() < i ){
        console.log("C'est plus !")
      }else if(line.trim() > i){
        console.log("C'est moins !")
      }else{
        console.log("Bravo, vous avez trouve le nombre mystère !!!")
        rl.close()
      }
    }else{
      console.log("Ce n'est pas un nombre !!!")
    }
    rl.prompt();
}).on('close', function() {
    process.exit(0);
});