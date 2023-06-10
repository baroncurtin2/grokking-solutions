export function makeSquares(arr: number[]): number[] {
    const n: number = arr.length;
    let highSqIdx: number = n - 1;
    let squares: number[] = Array(n).fill(0);

    let left: number = 0, right: number = n - 1;

    while (left <= right) {
        const leftSq = arr[left] * arr[left], rightSq = arr[right] * arr[right];

        if (leftSq > rightSq) {
            squares[highSqIdx] = leftSq;
            left++;
        } else {
            squares[highSqIdx] = rightSq;
            right--;
        }

        highSqIdx--;
    }

    return squares;
}