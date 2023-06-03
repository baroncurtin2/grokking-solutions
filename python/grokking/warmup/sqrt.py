def my_sqrt(x: int) -> int:
    # time: O(logN)
    # space: O(1)
    if x < 2:
        return x  # returns x if it is 0 or 1

    left, right = 2, x // 2
    pivot, num = 0, 0

    while left <= right:
        pivot = left + (right - left) // 2  # find the middle element
        num = pivot * pivot

        if num > x:
            right = pivot - 1  # if pivot * pivot > x, set right to pivot - 1
        elif num < x:
            left = pivot + 1  # if pivot * pivot < x, set left to pivot + 1
        else:
            return pivot  # pivot * pivot == x, return pivot

    return right
