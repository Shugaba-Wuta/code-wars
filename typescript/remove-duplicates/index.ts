var removeDuplicates = function (nums: number[]) {
    var k = 0
    var result: number[] = []
    nums.forEach((item) => {
        if (result[result.length - 1] !== item) {
            result.push(item)
        }
        else {
            k += 1
        }

    })
    return [k, result]
};
console.log(removeDuplicates([1, 1, 2]))