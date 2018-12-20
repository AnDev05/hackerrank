decodeMorse = function(morseCode){

    let encodeString = '';
    
    morseCode.split(/\s/).map((word,index) => {
        word.filter(item => item != '').map((item,index) => {
            encodeString +=  MORSE_CODE[item];
        });
        encodeString += ' ';
    });

    return encodeString;
}