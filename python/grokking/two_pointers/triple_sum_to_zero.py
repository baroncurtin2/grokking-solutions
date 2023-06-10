def search_triplets(arr: list[int]) -> list[list[int]]:
    triplets = []
    arr = sorted(arr)

    for i in range(len(arr)):
        if i > 0 and arr[i] == arr[i - 1]:
            continue

        search_pair(arr, -arr[i], i + 1, triplets)

    return triplets


def search_pair(arr: list[int], target: int, left: int, triplets: list[list[int]]) -> None:
    right = len(arr) - 1

    while left < right:
        total = arr[left] + arr[right]

        if total < target:
            left += 1
        elif total > target:
            right -= 1
        else:
            triplets.append([-target, arr[left], arr[right]])
            left += 1
            right -= 1

            while left < right and arr[left] == arr[left - 1]:
                left += 1
            while left < right and arr[right] == arr[right + 1]:
                right -= 1
