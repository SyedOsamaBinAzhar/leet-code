var removeDuplicates = function (nums) {

    let i = 0;
    let j = 1;

    while (j < nums.length) {
        if (nums[i] === nums[j]) {
            while (nums[i] === nums[j]) {
                nums.splice(j, 1);
            }
            i++;
            j++
        }
        else {
            i++;
            j++;
        }
    }

    return nums.length;
};

//   removeDuplicates([1,2])
//   removeDuplicates([0,0,1,1,1,2,2,3,3,4])
//   removeDuplicates([1,1,2])
//   removeDuplicates([1,1,1,1])
