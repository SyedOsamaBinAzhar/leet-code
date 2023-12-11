function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minValIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if ((j <= arr.length - 1) && (arr[j] < arr[minValIndex])) {
                minValIndex = j
            }
        }
        //swap
        let temp = arr[i];
        arr[i] = arr[minValIndex];
        arr[minValIndex] = temp

    }
    return arr
}


console.log(selectionSort([5, 3, 4, 1, 2]))
//OUTPUT: [1,2,3,4,5]
console.log(selectionSort([19, 44, 38, 5, 47, 15]))
//OUTPUT: [ 5, 15, 19, 38, 44, 47 ]

