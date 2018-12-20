function findNb(m) {

    if(m == 1)
        return 1;

    let sum = 1;
    let n = 2;

    while(sum < m){

        sum += Math.pow(n,3);

        if(sum == m){
            return n;
        }

        n++;
    }    

    return (-1);
}
