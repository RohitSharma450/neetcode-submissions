class Solution {
    topKFrequent(nums, k) {
        const freqMap = new Map();

        for (let num of nums) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }

        const sorted = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);

        return sorted.slice(0, k).map(entry => entry[0]);
    }
}

const nums = [1, 2, 2, 3, 3, 3];
const k = 2;

const sol = new Solution();
console.log(sol.topKFrequent(nums, k));