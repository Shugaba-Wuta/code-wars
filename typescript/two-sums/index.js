var twoSum = function (nums, target) {
    if (target === 0)
        return [0, nums.length - 1];
    let [start, end] = [0, 1];
    while (start < nums.length && end < nums.length) {
        console.log({ start, end });
        const curSum = nums.slice(start, end + 1).reduce((sum, cur) => { return sum + cur; }, 0);
        if (curSum > target)
            start += 1;
        else if (curSum < target)
            end += 1;
        // else if (curSum === target) return [start, end]
        else
            return [start, end]; // console.log({ curSum, target, start, end })
    }
    return [0, nums.length - 1];
};
// console.log(twoSum([2, 7, 11, 15], 26))
// console.log(twoSum([3, 2, 4], 12))
console.log(twoSum([0, 4, 3, 0], 0));
