//UNOPTIMIZED SOLUTION:
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                //SWAP
                let temp = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

bubbleSort([37, 45, 29, 8])
// [37,45,29,8]
// [37,29,45,8]
// [37,45,8,45] unoptimized because we dont have to iterate to the end because end is getting sorted.

