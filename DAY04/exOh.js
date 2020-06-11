var exOh = (function(string){
    string = [...string];
    list = {
        x : 0,
        y : 0
    };
    string.forEach((ls) => {
       if( ls === 'x' ) list.x++;
       if( ls === 'o' ) list.y++;
    });
    console.log('x :',list.x);
    console.log('o :',list.y);
    return ( list.x === list.y ?  true : false);
});

console.log(
    exOh('xooxxxxooxo')
    );
    console.log(
        exOh('xooxxxxooxoo')
        );