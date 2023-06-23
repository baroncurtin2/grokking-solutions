from collections import deque


def find_subarrays_with_product_less_than_target(arr: list[int], target: int) -> list[list[int]]:
    result = []
    product = 1.0
    left = 0
    
    for right in range(len(arr)):
        product *= arr[right]
        
        while product >= target and left < len(arr):
            product /= arr[left]
            left += 1
            
        temp_list = deque()
        
        for i in range(right, left - 1, -1):
            temp_list.appendleft(arr[i])
            result.append(list(temp_list))

    return result
