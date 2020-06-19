var person = { name: "John", age: 31, city: "New York" };

console.log(person.name);
console.log(person.age);
console.log(person.name+' from '+person.city);

// json multidimensional

var person = { 
    name: { 0:"John",       1:"Tom",        2:"Jess"    }, 
    age:  { 0:24,           1:37,           2:18        }, 
    city: { 0:'New York',   1:'Paris',      2:'London'  }
};

console.log(person.name[1]);