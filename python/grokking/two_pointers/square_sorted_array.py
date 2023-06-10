def make_squares(arr: list[int]) -> list[int]:
    n = len(arr)
    high_sq_idx = n - 1
    squares = [0] * n

    left, right = 0, n - 1

    while left <= right:
        left_sq, right_sq = arr[left] ** 2, arr[right] ** 2
        
        if left_sq > right_sq:
            squares[high_sq_idx] = left_sq
            left += 1
        else:
            squares[high_sq_idx] = right_sq
            right -= 1
            
        high_sq_idx -= 1

    return squares
