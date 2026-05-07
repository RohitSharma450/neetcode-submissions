class Solution {
    hasDuplicate(nums) {
        const seen = new Set()

        for (let a of nums) {
            if (seen.has(a)) {
                return true
            }
            seen.add(a)
        }

        return false
    }
}

const arr = [1, 2, 3, 3]

const sol = new Solution()
console.log(sol.hasDuplicate(arr))