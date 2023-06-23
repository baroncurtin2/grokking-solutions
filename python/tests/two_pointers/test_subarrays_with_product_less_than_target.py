from dataclasses import dataclass

import pytest

from grokking.two_pointers.subarrays_with_product_less_than_target import find_subarrays_with_product_less_than_target


@dataclass
class SubarraysProductLessThanTarget:
    arr: list[int]
    target: int
    expected: list[list[int]]


@pytest.fixture
def test_cases() -> list[SubarraysProductLessThanTarget]:
    return [
        # SubarraysProductLessThanTarget(
        #     arr=[2, 5, 3, 10],
        #     target=30,
        #     expected=[[2], [5], [2, 5], [3], [5, 3], [10]],
        # ),
        SubarraysProductLessThanTarget(
            arr=[8, 2, 6, 5],
            target=50,
            expected=[[8], [2], [8, 2], [6], [2, 6], [5], [6, 5]],
        ),
        # SubarraysProductLessThanTarget(
        #     arr=[1, 2, 3, 4, 5],
        #     target=10,
        #     expected=[[1], [2], [1, 2], [3], [2, 3], [1, 2, 3], [4], [5]],
        # ),
    ]


def test_find_subarrays_with_product_less_than_target(test_cases) -> None:
    for tc in test_cases:
        assert find_subarrays_with_product_less_than_target(tc.arr, tc.target) == tc.expected
