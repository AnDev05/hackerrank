function duplicateCount(text){
    if(text.length < 2)
        return 0;
    let result = Array.from(text.toLowerCase()).sort().join('').match(/([a-z0-9])\1+/gi);
    return  result ? result.length : 0;
}