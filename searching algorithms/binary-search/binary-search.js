const binarySearch = (nums, number) => {
    //binary search only works on sorted arrays:
    nums.sort((a, b) => a - b);

    let startIndex = 0;
    let endIndex = nums.length - 1;
    let midpoint = Math.floor((startIndex + endIndex / 2));

    while (nums[midpoint] !== number && startIndex <= endIndex) {
        if ((number < nums[midpoint])) {
            endIndex = midpoint - 1;

        } else {
            startIndex = midpoint + 1;
        }
        midpoint = Math.floor((startIndex + endIndex) / 2)
    }

    if (nums[midpoint] === number) return midpoint

    return -1;

}


console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 28))