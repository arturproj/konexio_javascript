function serialise(value){
    return [...value[0]];
}
let arrayUnique = function(array) {
    return array.filter(function(value, index) {
        return array.indexOf(value) === index;
    });
};

function secondGreatLow(array) {   
    array = array.map(function (x) { 
        return parseFloat(x);         
    });
    //console.log('#1',array);
    array = array.sort((a, b) => a - b);
    array = arrayUnique(array);
    //console.log('#2',array);
    //console.log('#3',array.length);
    if ( array.length == 0 ) {
        return [0,0];
    } else if ( array.length < 2 ) {
        return array;
    } else {
        return [array[1],array[array.length-2]];
    }
}

function inArgv(input) {
    return ( Array.isArray(input) && input.length > 1 ) ? secondGreatLow(input) : secondGreatLow(serialise(input));
}

var myArgs = process.argv.slice(2);

console.log(
    inArgv(
        [...myArgs]
        )
);
