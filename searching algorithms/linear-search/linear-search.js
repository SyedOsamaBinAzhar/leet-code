//LINEAR SEARCH:
function linearSearch(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }
    return -1;
}
// add whatever parameters you deem necessary - good luck!
console.log(linearSearch([10, 15, 20, 25, 30], 10))


//TIME COMPLEXITY:
//Best Case: O(1)
//Worst Case: O(N)