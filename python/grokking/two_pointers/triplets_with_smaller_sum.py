def search_triplets(arr: list[int], target: int) -> int:
    count = 0
    sorted_arr = sorted(arr)

    for i in range(len(sorted_arr) - 2):
        count += search_pair(sorted_arr, target - arr[i], i)
    return count


def search_pair(arr: list[int], target: int, first: int) -> int:
    count = 0
    left, right = first + 1, len(arr) - 1

    while left < right:
        if arr[left] + arr[right] < target:
            count += right - left
            left += 1
        else:
            right -= 1

    return count
