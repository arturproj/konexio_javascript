// Challenge
// En JavaScript, créer une fonction dashInsert(str) qui prend en paramètre str qui retournera un string 
// avec des tirets entre les nombres impairs. Par exemple 454793 retournera 4547-9-3. Zéro n’est pas un nombre impair.

// Echantillon de tests
// Input:99946

// Output:9-9-946

// Input:56730

// Output:567-30

var dashInsert = function (string) {
    string = [...string];
    string.forEach((item, i) => {
        if( Number(string[i]) % 2 != 0 && Number(string[i+1]) && Number(string[i+1]) % 2 != 0  ){ string[i] = string[i]+'-'; }
    });
    return string.join("");
}

var myArgs = process.argv.slice(2);

console.log(
    dashInsert(myArgs[0])
);