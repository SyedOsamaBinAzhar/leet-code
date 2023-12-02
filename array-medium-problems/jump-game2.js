/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {

    let coverage = 0;
    let destination = nums.length - 1;
    let lastJumpIndex = 0;
    let totalJumps = 0;

    if (nums.length === 1) return 0;

    for (let i = 0; i < nums.length; i++) {
        coverage = Math.max(coverage, i + nums[i]);

        if (i === lastJumpIndex) {
            lastJumpIndex = coverage;
            totalJumps++;

            if (coverage >= destination) {
                return totalJumps
            }
        }
    }

    return totalJumps
}

