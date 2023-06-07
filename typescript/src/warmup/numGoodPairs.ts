export function numGoodPairs(nums: number[]): number {
    type FreqMap = {
        [key: number]: number
    }

    let pairs: number = 0;
    let freqMap: FreqMap = {};

    for (const n of nums) {
        freqMap[n] = (freqMap[n] || 0) + 1
        pairs += freqMap[n] - 1
    }

    return pairs
}