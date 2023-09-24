// 169. Majority Element
var majorityElement = function (nums) {
    let numsAlreadyCounted = []
    let numsSingled = [];
    let frequency = [];
    let count = 1;
    for (let i = 0; i < nums.length; i++) {
        if (!numsAlreadyCounted.includes(nums[i])) {
            numsAlreadyCounted.push(nums[i]);
            for (let j = i + 1; j <= nums.length - 1; j++) {
                if (nums[i] === nums[j]) {
                    count++
                }
            }
            frequency.push(count);
            numsSingled.push(nums[i])
        } 
        count = 1;
    }

    let maxCountIndex = frequency.indexOf(Math.max(...frequency))
    return numsSingled[maxCountIndex];
    
};

majorityElement([3, 2, 3])
// majorityElement([2,2,1,1,1,2,2])
