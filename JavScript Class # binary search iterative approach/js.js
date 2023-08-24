let array1 = [3,5,7,9,11,13,17,19]
let find = 13 ;
let start = 0 ;
let end = array1.length-1 ;
let position = undefined
while(start<=end){
    let mid = Math.floor((start+end)/2);
    // (array1[mid] == find)
    // console.log(find);
    if(array1[mid] === find){
          position = mid ;
          break ;
} else if(array1[mid]<find){
    start = mid + 1 ;
}else{
    end = mid - 1;
}
}
console.log(position)