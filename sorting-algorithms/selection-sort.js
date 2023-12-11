function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minValIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if ((j <= arr.length - 1) && (arr[j] < arr[minValIndex])) {
                minValIndex = j
            }
        }
        let temp = arr[i];
        arr[i] = arr[minValIndex];
        arr[minValIndex] = temp

    }
    return arr
    // console.log("arr", arr)

}


console.log(selectionSort([5, 3, 4, 1, 2]))
// selectionSort([5, 3, 4, 1, 2])
// selectionSort([5, 4, 3, 2, 1])
// selectionSort([19, 44, 38, 5, 47, 15])

