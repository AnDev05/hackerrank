function duplicateEncode(word){
    let wordObj = {};
    Array.from(word.toLowerCase()).forEach((letter) =>{
        if(wordObj.hasOwnProperty(letter)){
            wordObj[letter]++;
        }else{
            wordObj[letter] = 1;
        }
    });

    return Array.from(word.toLowerCase()).map((letter) => {
        if(wordObj[letter] > 1) return ')';
        else return '(';
    }).join('');

}