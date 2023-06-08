from dataclasses import dataclass

import pytest

from grokking.two_pointers.pair_with_target import pair_with_target_sum


@dataclass
class TargetSumTestCase:
    arr: list[int]
    target_sum: int
    expected: list[int]


@pytest.fixture
def test_cases() -> list[TargetSumTestCase]:
    return [
        TargetSumTestCase(
            arr=[1, 2, 3, 4, 6],
            target_sum=6,
            expected=[1, 3],
        ),
        TargetSumTestCase(
            arr=[2, 5, 9, 11],
            target_sum=11,
            expected=[0, 2],
        ),
    ]


def test_pair_with_target_sum(test_cases: list[TargetSumTestCase]) -> None:
    for tc in test_cases:
        assert pair_with_target_sum(tc.arr, tc.target_sum) == tc.expected
