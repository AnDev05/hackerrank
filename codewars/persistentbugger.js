function persistence(num) {
    
    if(num < 9) return 0;
    
    let newNum = Array.from(num.toString());
    let step = 0;
    while(newNum.length > 1){
        let temp = 1;
        newNum.map((item, index) => {
            temp *= item;
        });
        newNum = Array.from(temp.toString());
        step++;
    }
    return step;
 }



 function persistence(num) {
    let step = 0;
    let temp = num.toString();

    while(temp.length > 1){
        temp = Array.from(temp).map(Number).reduce((a,b) => a*b).join();
        step++;
    }
    return step;
 }