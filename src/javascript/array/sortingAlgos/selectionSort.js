var a = [5, 3, 6, 7, 1];

function lowestElement(arr, start, end) {
  var minIndex = 0;
  if (start <=end) {
    for (var i = start; i <=end; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }
    return minIndex;
  }
}

function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var indexOfLowestElement = lowestElement(arr, i+1, arr.length);
    console.log(indexOfLowestElement);

    if (i!=indexOfLowestElement) {
      var temp = arr[i];
      arr[i] = arr[indexOfLowestElement];
      arr[indexOfLowestElement] = temp;
    }
  }
}
function printArray() {
  console.log(a);
}
selectionSort(a);
printArray();
