'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {

    let index = s.toLowerCase().indexOf('AM'.toLowerCase());
    let isPM = false;

    if (index == -1) {
        index = s.toLowerCase().indexOf('PM'.toLowerCase());
        isPM = true;
    }

    s = s.substring(0, index);

    let spls = s.split(':');

    let hour = parseInt(spls[0]);
    if(hour < 12 && isPM){
        hour += 12;
    }
    else if(!isPM && hour == 12){
        hour = '00';
    }
    else{
        hour = spls[0];
    }

    return hour + ':' + spls[1] + ':' + spls[2];

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
