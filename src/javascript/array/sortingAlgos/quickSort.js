var a = [5, 3, 6, 7, 1, 9, 1, 5, 5];
 function quickSort(arr,start,end){
     if(start<end){
         var p=partition(arr,start,end);
         quickSort(arr,start,p-1);
         quickSort(arr,p+1,end)
     }
 }

 function partition(arr,start,end){
    var pivot=arr[end];
    var pIndex=start;
    for(var i=start;i<=(end);i++){
        if(arr[i]<pivot){
           var temp;
           temp=a[i];
           a[i]=a[pIndex];
           a[pIndex]=temp;
           pIndex=pIndex+1;
        }
    }
    var temp=a[pIndex];
    a[pIndex]=pivot;
    a[end]=temp;
    return pIndex;
 }
 function printArray(){
     console.log(a);
 }

 quickSort(a,0,a.length);
 printArray();