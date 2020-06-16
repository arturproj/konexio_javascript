var readline = require('readline'),
rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('Quel est le nombre ? ');
rl.prompt();
var i =  Math.floor(Math.random() * (100 - 1)) + 1;;

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
    console.log('disparais maintenant! ;)');
    process.exit(0);
});