class Solution {
    groupAnagrams(strs) {
        const map = new Map()

        for (let str of strs) {
            const key = str.split('').sort().join('')

            if (!map.has(key)) {
                map.set(key, [])
            }

            map.get(key).push(str)
        }

        return Array.from(map.values())
    }
}

let strs = ["act","pots","tops","cat","stop","hat"]

const sol = new Solution()
console.log(sol.groupAnagrams(strs))