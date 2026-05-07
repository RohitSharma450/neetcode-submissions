class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const v1 = s.split("").sort().join("")
        const v2 = t.split("").sort().join("")
        if(v1 == v2) {
            return true
        } else {
            return false
        }
    }
}

const s = "racecar"
const t = "carrace"

const sol = new Solution()
console.log(sol.isAnagram(s, t))