function findmax(arr){
    if(arr.length==0){
        return NULL
    }
    max=arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
arr = [5, 9, 2, 6, 1];
console.log(findmax(arr));
  