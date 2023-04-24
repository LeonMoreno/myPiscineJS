/**
 * Given an array nums.
 *  We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// let runningSum = function(nums) {
    
//     for (let i = 0; i < nums.length; i++) {
//         if (i != 0)
//             nums[i] = nums[i - 1] + nums[i];
//     }
//     return (nums);
// };

let runningSum = function(nums) {

    let sumNums = 0;

    const res = nums.map(num => {
       return(sumNums += num);
    });
    
    return(res);
};



console.log(runningSum([1, 2, 3, 4, 5]));