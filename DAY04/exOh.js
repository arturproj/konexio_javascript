var exOh = (function(string){
    string = string.split("");
    list = {
        x : 0,
        y : 0
    };
    string.forEach((ls) => {
       if( ls === 'x' ){list.x=list.x+1;}
       if( ls === 'o' ){list.y=list.y+1;}
    });
    console.log('x :',list.x);
    console.log('o :',list.y);
    return ( list.x === list.y ?  true : false);
});

console.log(
    exOh('xooxxxxooxo')
    );