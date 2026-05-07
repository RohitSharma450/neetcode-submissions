class Solution {
    hasDuplicate(nums) {
        return new Set(nums).size !== nums.length
    }
}

const arr = [1, 2, 3, 3]

const sol = new Solution()
console.log(sol.hasDuplicate(arr))  // ✅ true