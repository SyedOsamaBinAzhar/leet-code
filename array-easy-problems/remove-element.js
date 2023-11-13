var removeElement = function (nums, val) {
    let k = 0;
    let j = 0;
    while (j < nums.length) {
        if (nums[j] !== val) {
            nums[k] = nums[j];
            k++;
        }
        j++;
    }

    return k
};