// UNOPTIMIZED SOLUTION:
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

console.log(bubbleSort([37, 45, 29, 8]))
//OUTPUT
//[ 8, 29, 37, 45 ]

// console.log("bubbleSort([37, 45, 29, 8])", ))
// [37,45,29,8]
// [37,29,45,8]
// [37,45,8,45] unoptimized because we dont have to iterate to the end because end is getting sorted.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//OPTIMIZED SOLUTION AS PER PSEUDO CODE: lESS ITERATIONS
// function bubbleSort(arr) {
//     for (let i = arr.length; i > 0; i--) {
//         for (let j = 0; j < i - 1; j++) {
//             console.log("arr", arr, arr[j], arr[j + 1])
//             if (arr[j] > arr[j + 1]) {
//                 //SWAP
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }

//     return arr;
// }

bubbleSort([37, 45, 29, 8])

//BUBBLE SORT OPTIMIZATION:
// function bubbleSort(arr) {
//     let noSwaps;
//     for (let i = arr.length; i > 0; i--) {
//         noSwaps = true;
//         for (let j = 0; j < i - 1; j++) {
//             console.log("arr", arr, arr[j], arr[j + 1])
//             if (arr[j] > arr[j + 1]) {
//                 //SWAP
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//                 noSwaps = false;
//             }
//         }
//         if (noSwaps) break;
//     }

//     return arr;
// }

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])
