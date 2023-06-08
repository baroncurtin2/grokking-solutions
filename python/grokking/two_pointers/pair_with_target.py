def pair_with_target_sum(arr: list[int], target_sum: int) -> list[int]:
    start, end = 0, len(arr) - 1

    while start < end:
        if arr[start] + arr[end] < target_sum:
            start += 1
        elif arr[start] + arr[end] > target_sum:
            end -= 1
        else:
            return [start, end]

    return [-1, -1]
