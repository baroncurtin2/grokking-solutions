from dataclasses import dataclass

import pytest

from grokking.two_pointers.triplet_close_to_target import triplet_sum_close_to_target


@dataclass
class TripletSumCloseTestCase:
    arr: list[int]
    target_sum: int
    expected: int


@pytest.fixture
def test_cases() -> list[TripletSumCloseTestCase]:
    return [
        TripletSumCloseTestCase(
            arr=[-1, 0, 2, 3], target_sum=3, expected=2,
        ),
        TripletSumCloseTestCase(
            arr=[-3, -1, 1, 2], target_sum=1, expected=0,
        ),
        TripletSumCloseTestCase(
            arr=[1, 0, 1, 1], target_sum=100, expected=3,
        ),
        TripletSumCloseTestCase(
            arr=[0, 0, 1, 1, 2, 6], target_sum=5, expected=4,
        ),
    ]


def test_triplet_sum_close_to_target(test_cases: list[TripletSumCloseTestCase]) -> None:
    for tc in test_cases:
        assert triplet_sum_close_to_target(tc.arr, tc.target_sum) == tc.expected
