function rot13(string){
    var alfa =      [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ ",..."abcdefghijklmnopqrstuvwxyz"];
    var reverse =   [..."NOPQRSTUVWXYZABCDEFGHIJKLM ",..."nopqrstuvwxyzabcdefghijklm"];
    string = [...string.toString()];
    string.forEach((cht, i) => {
        string[i] = reverse[alfa.indexOf(cht)];
        //console.log([cht,i,reverse[alfa.indexOf(cht)]])
    });
    return string.join('');
}


console.log(
    rot13('Lorem Ipsum is simply dummy text of the printing and typesetting industry')
)