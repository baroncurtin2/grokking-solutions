export function findSubArrays(arr, target) {
    let result = [];
    let product = 1.0;
    let left = 0;

    for (let right = 0; right < arr.length; right++) {
        product *= arr[right];

        while (product >= target && left < arr.length) {
            product /= arr[left];
            left++;
        }

        let tempList = [];

        for (let i = right; i >= left; i--) {
            tempList.unshift(arr[i]);
            result.push([...tempList]);
        }
    }

    return result;
}
