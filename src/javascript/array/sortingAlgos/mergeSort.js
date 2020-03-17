var a = [5, 3, 6, 7, 1, 9, 1, 5, 5];

function mergeSort(arr, start, end) {
  if (start == end) {
    return arr;
  } else if (start < end) {
    mid = Math.floor((start + end) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, mid, end);
  }
}

function merge(arr, start, mid, end) {
  var temp = new Array(end - start + 1);
  var i = start,
    j = mid,
    k = 0;
  while (i <= mid && j <= end) {
    if (arr[i] < arr[j]) {
      temp[k] = arr[i];
      k++;
    } else {
      temp[k] = arr[j];
      k++;
    }
  }
  while (i <= mid) {
    temp[k] = arr[i];
    k += 1;
    i += 1;
  }

  // add elements left in the second interval
  while (j <= end) {
    temp[k] = arr[j];
    k += 1;
    j += 1;
  }

  // copy temp to original interval
  for (i = start; i <= end; i += 1) {
    arr[i] = temp[i - start];
  }
}
function printArray() {
  console.log(a);
}

mergeSort(a,0,a.length);
printArray();
