const prompt = require("prompt-sync")({sigint: true});
class InsertionSort {
  constructor() {
    var size = prompt("What is Size of Array:");
    this.a = new Array(parseInt(size));
    console.log(this.a.length);
    console.log("Enter Elements of Array");
    for (var i = 0; i < this.a.length; i++) {
        this.a[i]=Number(prompt());
    }
  }

  printArray() {
    console.log(this.a);
  }

    insertionSort() {
      for (var i = 1; i < this.a.length; i++) {
        var holePosition = i;
        var valueToSort = this.a[i];
        while (valueToSort < this.a[holePosition - 1]) {
          this.a[holePosition] = this.a[holePosition - 1];
          holePosition--;
        }
        this.a[holePosition] = valueToSort;
      }
    }
}
var insertionSort = new InsertionSort();
insertionSort.insertionSort();
insertionSort.printArray();
