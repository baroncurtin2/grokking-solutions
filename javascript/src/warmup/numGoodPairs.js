export function numGoodPairs(nums) {
    let pairs = 0;
    let freqMap = {};

    for (const n of nums) {
        freqMap[n] = (freqMap[n] || 0) + 1;
        pairs += freqMap[n] - 1;
    }

    return pairs;
}
