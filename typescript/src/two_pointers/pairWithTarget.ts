export function pairWithTargetSum(arr: number[], targetSum: number): number[] {
    let start = 0, end = arr.length - 1;

    while (start < end) {
        let a = arr[start], b = arr[end];
        
        if (a + b < targetSum) {
            start++
        } else if (a + b > targetSum) {
            end--
        } else {
            return [start, end]
        }

    }

    return [-1, -1]
}