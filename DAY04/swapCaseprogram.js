process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  let chunk;
  // Use a loop to make sure we read all available data.
  if ((chunk = process.stdin.read()) !== null) {
    process.stdout.write(
        'ouput : ' + swapCase(chunk)
        );        
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});

function swapCase(string){
    var alfa =      [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ ",..."abcdefghijklmnopqrstuvwxyz"];
    var reverse =   [..."abcdefghijklmnopqrstuvwxyz ",..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    string = [...string.toString()];
    string.forEach((cht, i) => {
        string[i] = reverse[alfa.indexOf(cht)];
        //console.log([cht,i,reverse[alfa.indexOf(cht)]])
    });
    return string.join('');
}