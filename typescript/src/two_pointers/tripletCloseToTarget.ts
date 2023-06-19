export function tripletSumCloseToTarget(
    arr: number[],
    targetSum: number
): number {
    arr.sort();

    let smallestDiff = Infinity;

    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            const targetDiff = targetSum - arr[i] - arr[left] - arr[right];

            if (targetDiff === 0) return targetSum;

            if (
                Math.abs(targetDiff) < Math.abs(smallestDiff) ||
                (Math.abs(targetDiff) === Math.abs(smallestDiff) &&
                    targetDiff > smallestDiff)
            )
                smallestDiff = targetDiff;

            if (targetDiff > 0) left++;
            else right--;
        }
    }

    return targetSum - smallestDiff;
}
