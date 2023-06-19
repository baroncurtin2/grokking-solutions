import math


def triplet_sum_close_to_target(arr: list[int], target_sum: int) -> int:
    sorted_arr = sorted(arr)

    smallest_diff = math.inf

    for i in range(len(sorted_arr) - 2):
        left = i + 1
        right = len(arr) - 1

        while left < right:
            target_diff = target_sum - arr[i] - arr[left] - arr[right]

            if target_diff == 0:
                return target_sum

            if abs(target_diff) < abs(smallest_diff) or (
                    abs(target_diff) == abs(smallest_diff) and target_diff > smallest_diff):
                smallest_diff = target_diff

            if target_diff > 0:
                left += 1
            else:
                right -= 1

    return target_sum - smallest_diff
