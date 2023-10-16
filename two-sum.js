//SOLUTION with O(N)^2 time complexity which is not good.
var twoSum = function (nums, target) {
    let temp = []
    for(let i = 0; i<nums.length;i++){
        for(let j = i+1; j<nums.length;j++){
            if(nums[i] + nums[j] === target) {
                temp.push(i)
                temp.push(j)
                break;
            }
        }    
    }
    return temp;
};

// twoSum([3,2,4], 6)
// twoSum([2,7,11,15], 9)
// twoSum([3,3], 6)


