// Challenge
// Créer un fichier formatDate.js.

// En utilisant JavaScript, créer une fonction formatDate(date) 
// qui prend en paramètre date qui est un string au format aaaa-mm-jj et retourne la même date au format jj/mm/aaaa.

// Samples
// Input : '2018-11-17'

// Output : '17/11/2018'

// Input : '1986-07-03'

// Output : '03/07/1986'

// Input : '1993-02-02'

// Output : '02/02/1993'

var formatDate = function (date) {
    let format = new Date(date);
    let res = [
        format.getDate(),
        format.getMonth()+1,
        format.getFullYear()
    ];
    return res.join('/');
};

console.log(
    formatDate('2018-11-17')
)
console.log(
    formatDate('1986-07-03')
)
console.log(
    formatDate('1993-02-02')
)