function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i]
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > temp) {
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

console.log(insertionSort([5, 3, 4, 1, 2]))
//OUTPUT: [ 1, 2, 3, 4, 5 ]
console.log(insertionSort([2, 1, 9, 76, 4]))
//OUTPUT: [ 1, 2, 4, 9, 76 ]
console.log(insertionSort([10, 4, 6, 2, 3, 1]))
//OUTPUT: [ 1, 2, 3, 4, 6, 10 ]
console.log(insertionSort([1, 2, 9, 76, 0]))
//OUTPUT: [ 0, 1, 2, 9, 76 ]
