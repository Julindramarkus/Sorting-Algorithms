function bubbleSort(arr){
   var len = arr.length;
   for (var i = len-1; i>=0; i--){ //i=5
     for(var j = 1; j<=i; j++){ //j=1
       if(arr[j-1]>arr[j]){ //j-1=0 > j=1
           var temp = arr[j-1]; //temp = 7
           arr[j-1] = arr[j]; //arr[j-1] = 5
           arr[j] = temp; //arr[j] = 7
        }
     }
   }
   return arr;
}
console.log(bubbleSort([7,5,2,4,3,9])); //[2, 3, 4, 5, 7, 9](6)
console.log(bubbleSort([9,7,5,4,3,1])); //[1, 3, 4, 5, 7, 9]
console.log(bubbleSort([1,2,3,4,5,6])); //[1, 2, 3, 4, 5, 6]
// step-1: you compare the first item with the second. If the first item is bigger than the second item. you swap them so that the bigger one stays in the second position.
//
// step-2:And then compare second with third item. if second item is bigger than the third, we swap them. otherwise, they stayed in their position. Hence, the biggest among first three is in the third position.
//
// step-3:we keep doing it. until we hit the last element of the array. In that way we bubble up the biggest item of the array to the right most position of the array.
//
// step-4: Look at the inner loop in the code below.
//
// step-5: We repeat this process, starting from the last item of the array. look at the outer loop in the code below. We do this way, so that after finishing the first inner loop, the biggest one will be in the last item of the array.
//
// step-6: and then we move backward inside the outer loop.
//
// same thing is going on....
//

function bubble(ar){
  var i, j, limit //undefined
  limit = ar.length;
  while(limit--){ //when the length of array, initially, is equal to 4, while will decrease the limit, which is ar.length, by one so it's value is 3 and continues to decrease it until it gets 0 for the index
    for( i = 0, j = 1; i < ar.length; i++, j++)
    if(ar[i] > ar[j]){
      temp = ar[i];
      ar[i] = ar[j];
      ar[j] = temp;
    }
  }
return ar;
}
 console.log(bubble([1,4,2,3]));
