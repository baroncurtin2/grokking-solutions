export function removeDuplicates(arr) {
    // time: O(n)
    // space: O(1)
    if (arr.length <= 1) {
        return arr.length;
    }

    // two pointers
    let i = 0; // slow
    let j = 1; // fast

    while (j < arr.length) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
        j++;
    }

    return i + 1;
}

export function removeAllKeys(arr, key) {
    // time: O(n)
    // space: O(1)
    let i = 0; // slow

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== key) {
            arr[i] = arr[j];
            i++;
        }
    }

    return i;
}
