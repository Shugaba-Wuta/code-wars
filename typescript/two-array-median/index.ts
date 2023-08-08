var findMedianSortedArrays = function (nums1: number[], nums2: number[]) {
    const aEnd = nums1.length - 1
    const bEnd = nums2.length - 1

    function solve(k: number, aStart: number, aEnd: number, bStart: number, bEnd: number) {
        //
        if (aStart > aEnd) {
            return nums2[k - aStart]
        }
        if (bStart > bEnd) {
            return nums1[k - bStart]
        }
        const aMid = Math.floor((aStart + aEnd) / 2)
        const bMid = Math.floor((bStart + bEnd) / 2)
        const aMidVal = nums1[aMid]
        const bMidVal = nums2[bMid]

        if (aMid + bMid < k) {
            if (aMidVal < bMidVal) {
                return solve(k, aMid + 1, aEnd, bStart, bEnd)
            }
            return solve(k, aStart, aEnd, bMid + 1, bEnd)
        } else {
            if (aMidVal > bMidVal) {
                return solve(k, aStart, aMid - 1, bStart, bEnd)
            }
            return solve(k, aStart, aEnd, bStart, bMid - 1)
        }
    }

    const n = (nums1.length + nums2.length)
    const k = Math.floor(n / 2)
    if (n % 2 == 0) {
        const lower = solve(k - 1, 0, aEnd, 0, bEnd)
        const upper = solve(k, 0, aEnd, 0, bEnd)
        return (lower + upper) / 2
    }
    return solve(k, 0, aEnd, 0, bEnd)

}
console.log(findMedianSortedArrays([1, 2], [3, 4]))