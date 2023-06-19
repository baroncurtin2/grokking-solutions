export function makeSquares(arr) {
    const n = arr.length;
    let highSqIdx = n - 1;
    let squares = Array(n).fill(0);

    let left = 0,
        right = n - 1;

    while (left <= right) {
        const leftSq = arr[left] * arr[left],
            rightSq = arr[right] * arr[right];

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
