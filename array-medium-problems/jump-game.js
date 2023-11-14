////////////////////////////////////////////INITIAL APPROACH MY APPROACH://////////////////////////////////////////////////////////////////////////
// //130 tescases passing of 172
// var canJump = function (nums) {
//     if (nums.length === 1) return true
//     if (nums.length === 2 && nums[1] === 0) return true
//     // if(nums[nums.length-1] === 0) return true
//     nums.sort((a, b) => a - b)
//     if (nums[0] === 0) return false;
//     else return true
// };

// canJump([2, 3, 1, 1, 4])
// canJump([3,2,1,0,4])
// canJump([2, 0])


////////////////////////////////////////////EFFICIENT APPROACH://////////////////////////////////////////////////////////////////////////
//LEARNT FROM YOUTUBE: https://www.youtube.com/watch?v=Gtugy3mRV-A&t=51s
var canJump = function (nums) {
    let finalPosition = nums.length - 1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= finalPosition) finalPosition = i

    }

    return finalPosition === 0
}

// canJump([2, 3, 1, 1, 4])
// canJump([3, 2, 1, 0, 4])
// canJump([2, 0])
// canJump([2,0,0])
// canJump([1, 1, 2, 5, 2, 1, 0, 0, 1, 3])


