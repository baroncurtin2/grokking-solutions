def contains_duplicate_brute_force(nums: list[int]) -> bool:
    # time: O(n^2)
    # space: O(1)

    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] == nums[j]:
                return True

    return False


def contains_duplicate_set(nums: list[int]) -> bool:
    # time: O(n)
    # space: O(n)
    uniques = set()

    for num in nums:
        if num in uniques:
            return True

        uniques.add(num)
    return False


def contains_duplicate_sorting(nums: list[int]) -> bool:
    # time: O(nlogn)
    # space: O(n)
    nums = sorted(nums)

    return any(nums[i] == nums[i + 1] for i in range(len(nums) - 1))


__all__ = [
    "contains_duplicate_brute_force",
    "contains_duplicate_set",
    "contains_duplicate_sorting",
]
