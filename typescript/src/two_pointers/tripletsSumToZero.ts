export function searchTriplets(arr: number[]): Triplet[] {
    let triplets: Triplet[] = [];
    arr.sort()

    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] == arr[i - 1]) continue;

        searchPair(arr, -arr[i], i + 1, triplets);
    }

    return triplets;
}

export type Triplet = number[];

function searchPair(arr: number[], target: number, left: number, triplets: Triplet[]) {
    let right = arr.length - 1;

    while (left < right) {
        const total = arr[left] + arr[right];

        if (total < target) {
            left++;
        } else if (total > target) {
            right--;
        } else {
            triplets.push([-target, arr[left], arr[right]])
            left++;
            right--;

            while (left < right && arr[left] == arr[left - 1]) {
                left++;
            }
            while (left < right && arr[right] == arr[right + 1]) {
                right--;
            }
        }
    }
}