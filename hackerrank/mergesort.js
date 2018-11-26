function merge(leftArr, rightArr){

    let sortedArr = [];

    while (leftArr.length && rightArr.length) {

        if (leftArr[0] <= rightArr[0]) {
    
          sortedArr.push(leftArr[0]);
    
          leftArr = leftArr.slice(1)
    
       } else {
    
          sortedArr.push(rightArr[0]);
    
          rightArr = rightArr.slice(1)
    
         }
    
       }
    
      while (leftArr.length)
    
        sortedArr.push(leftArr.shift());
    
      while (rightArr.length)
    
        sortedArr.push(rightArr.shift());
    
      return sortedArr;
}

function mergeSort(arr){

    if(arr.length < 2) return arr;

    const midPoint = parseInt(arr.length / 2);

    let leftArr = arr.slice(0, midPoint);

    let rightArr = arr.slice(midPoint, arr.length);

    return merge(leftArr,rightArr);
}