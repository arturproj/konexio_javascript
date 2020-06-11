const debug = require('./module/debug.js');
var readline = require('readline'),
rl = readline.createInterface(process.stdin, process.stdout);
var hostname,username,password,exit;
rl.setPrompt('master@root/$> ');
rl.prompt();

const comConfig = {
    hostname :  (function(DNS){
         hostname = DNS;
    }),
    username :  (function(USR){
         username = USR;
    }),
    password :  (function(PSW){
         password = PSW;
    }),
    exit :  (function(mod){
         exit = mod;
    })
};

function SyS_Config(command){    
    if (typeof command[1] !== 'undefined') {
        rl.setPrompt('master@root/config/$> ');
        switch(command[1]) {
            case ('-help' || '-h'):                
                console.log('command help');
                break;
            case '-hostname':
                comConfig.hostname(command[2]);
                console.log(hostname);
                break;
            case '-username':
                comConfig.username(command[2]);
                break;
            case '-password':
                comConfig.password(command[2]);
                break;
            case '-exit':
                comConfig.exit(0);
                break;
            default:
                console.log('Say what? I might have heard `' + line.trim() + '`');
            break;
        }

    }else{
        rl.setPrompt('master@root/$> ');
        console.log('not found istruction for command');

    }
}
rl.on('line', function(line) {
    var command = line.trim();
    command = command.split(" ");
    switch(command[0]) {
        case 'config':
            SyS_Config(command);
            break;
        default:
            console.log('Say what? I might have heard `' + line.trim() + '`');
        break;
    }
    rl.prompt();
}).on('close', function() {
    console.log('Have a great day!');
    process.exit(0);
});