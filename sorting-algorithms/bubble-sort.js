// NAIVE SOLUTION:
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr, arr[j], arr[j + 1])
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

// console.log(bubbleSort([37, 45, 29, 8]))
//OUTPUT
//[ 8, 29, 37, 45 ]

// console.log("bubbleSort([37, 45, 29, 8])", ))
// [37,45,29,8]
// [37,29,45,8]
// [37,45,8,45] unoptimized because we dont have to iterate to the end because end is getting sorted.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//OPTIMIZED SOLUTION AS PER PSEUDO CODE: lESS ITERATIONS
function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
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

console.log(bubbleSort([8, 29, 37, 45]))

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

// bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])

























//Printing few iterations to understand:

//STEP:1:
// [ 37, 45, 29, 8 ] comparing 37 45 and swapping in next step if required.
//--------------------------------------------------------------------------------------------------
// [ 37, 45, 29, 8 ] comparing 45 29 and swapping in next step if required.
//--------------------------------------------------------------------------------------------------
// [ 37, 29, 45, 8 ] comparing 45 8 and swapping in next step if required.
//--------------------------------------------------------------------------------------------------
// [ 37, 29, 8, 45 ] 45 undefined //this iteration should not happen as 45 reached the top.  45 is sorted.

//STEP:2:
//------------------------------------------------------------------------------------------------------
// [ 37, 29, 8, 45 ] comparing 37 29 and swapping in next step if required.
//-------------------------------------------------------------------------------------------------------
// [ 29, 37, 8, 45 ] comparing 37 8 and swapping in next step if required.
//-------------------------------------------------------------------------------------------------------
// [ 29, 8, 37, 45 ] comparing 37 45 this iteration should not happen as 37 and 45 already reached the top.
// We should start over from this point as 37 and 45 are sorted. We have to sort 29 and 8 only.
//--------------------------------------------------------------------------------------------------------
// [ 29, 8, 37, 45 ] comparing 45 undefined this iteration should not happen as 45 already reached the top.
//---------------------------------------------------------------------------------------------------------

//STEP:3
// [ 29, 8, 37, 45 ] 29 8
// [ 8, 29, 37, 45 ] 29 37
// Array is sorted at this point but there are many unnecessary redundant iterations below:
//--------------------------------------------------------------------------------------------------------
// [ 8, 29, 37, 45 ] 37 45
// [ 8, 29, 37, 45 ] 45 undefined
// [ 8, 29, 37, 45 ] 8 29
// [ 8, 29, 37, 45 ] 29 37
// [ 8, 29, 37, 45 ] 37 45
// [ 8, 29, 37, 45 ] 45 undefined
// [ 8, 29, 37, 45 ]
// [ 37, 45, 29, 8 ] 37 45
// [ 37, 45, 29, 8 ] 45 29
// [ 37, 29, 45, 8 ] 45 8
// [ 37, 29, 8, 45 ] 45 undefined
// [ 37, 29, 8, 45 ] 37 29
// [ 29, 37, 8, 45 ] 37 8
// [ 29, 8, 37, 45 ] 37 45
// [ 29, 8, 37, 45 ] 45 undefined
// [ 29, 8, 37, 45 ] 29 8
// [ 8, 29, 37, 45 ] 29 37
// [ 8, 29, 37, 45 ] 37 45
// [ 8, 29, 37, 45 ] 45 undefined
// [ 8, 29, 37, 45 ] 8 29
// [ 8, 29, 37, 45 ] 29 37
// [ 8, 29, 37, 45 ] 37 45
// [ 8, 29, 37, 45 ] 45 undefined

//THERE ARE MORE ITERATIONS...
// [
//   8, 1, 2, 3,
//   4, 5, 6, 7
// ] 8 1
// [
//   1, 8, 2, 3,
//   4, 5, 6, 7
// ] 8 2
// [
//   1, 2, 8, 3,
//   4, 5, 6, 7
// ] 8 3
// [
//   1, 2, 3, 8,
//   4, 5, 6, 7
// ] 8 4
// [
//   1, 2, 3, 4,
//   8, 5, 6, 7
// ] 8 5
// [
//   1, 2, 3, 4,
//   5, 8, 6, 7
// ] 8 6
// [
//   1, 2, 3, 4,
//   5, 6, 8, 7
// ] 8 7
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 8 undefined
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 1 2
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 2 3
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 3 4
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 4 5
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 5 6
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 6 7
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 7 8
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 8 undefined
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 1 2
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 2 3
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 3 4
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 4 5
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 5 6
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 6 7
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 7 8
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 8 undefined
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 1 2
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 2 3
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 3 4
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 4 5
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 5 6
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 6 7
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 7 8
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 8 undefined
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 1 2
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 2 3
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 3 4
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 4 5
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 5 6
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 6 7
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 7 8
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 8 undefined
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 1 2
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 2 3
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 3 4
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 4 5
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 5 6
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 6 7
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 7 8
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 8 undefined
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 1 2
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 2 3
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 3 4
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 4 5
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 5 6
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 6 7
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 7 8
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 8 undefined
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 1 2
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 2 3
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 3 4
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 4 5
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 5 6
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 6 7
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 7 8
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] 8 undefined

