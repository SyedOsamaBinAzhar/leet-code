var jump = function (nums) {
    // let finalPosition = nums.length;
    let finalPosition = nums.length - 1;

    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i + nums[i] >= finalPosition) {
            console.log("true1")
            count++;
            break;
        } else if ((i + nums[i]) <= nums[i + 1]) {
            console.log("true2")
            count++
        }
        else if ((i + nums[i]) > nums[i + 1]) {
            console.log("true3")
            i = i + nums[i]
            count++
        }
    }

    // return count
    console.log("count", count)
}

// jump([2, 3, 1, 1, 4])
jump([2, 3, 0, 1, 4])
// jump([0])
// jump([1, 1, 2, 5, 2, 1, 0, 0, 1, 3])
