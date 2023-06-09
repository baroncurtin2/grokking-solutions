def remove_duplicates(arr: list[int]) -> int:
    # time: O(n)
    # space: O(1)
    if len(arr) <= 1:
        return len(arr)

    # two pointers
    i = 0  # slow
    j = 1  # fast

    while j < len(arr):
        if arr[i] != arr[j]:
            i += 1
            arr[i] = arr[j]
        j += 1

    return i + 1


def remove_all_keys(arr: list[int], key: int) -> int:
    # time: O(n)
    # space: O(1)
    i = 0  # slow

    for j in range(len(arr)):
        if arr[j] != key:
            arr[i] = arr[j]
            i += 1

    return i
