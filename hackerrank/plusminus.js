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
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {

    let pos = 0;
    let neg = 0;
    let zero = 0;
    const one = 1.0/arr.length;
    arr.forEach(el => {
        if(el > 0) {
            pos += one;
        }else if(el < 0){
            neg += one;
        }else{
            zero += one;
        }
    });

    return [pos,neg,zero];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const rs = plusMinus(arr);

    ws.write(rs[0] + '\n');
    ws.write(rs[1] + '\n');
    ws.write(rs[2] + '\n');
    
    ws.end();
}
