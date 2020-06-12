var exOh = (function(string){
    string = [...string];
    var list = {
        x: 0,
        y:0,
        get getX() {
            return this.x;
        },
        get getY() {
            return this.y;
        },
        get X() {
            this.x++;
        },
        get Y() {
            this.y++;
        }
    };

    for (var key in string) {
        if( string[key] != 'x' && string[key] != 'o' ) break;
        if( string[key] === 'x' ) list.X;
        if( string[key] === 'o' ) list.Y;
    }
    console.log('x :',list.getX);
    console.log('o :',list.getY);
    return ( list.x === list.y ?  true : false);
});

console.log(
    exOh('xooxxxxooxo')
    );
    console.log(
        exOh('xooxxxxooxoo')
        );