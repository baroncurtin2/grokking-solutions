from dataclasses import dataclass

import pytest

from grokking.warmup.good_pairs import num_good_pairs


@dataclass
class GoodPairsTestCase:
    nums: list[int]
    expected: int


@pytest.fixture
def test_cases() -> list[GoodPairsTestCase]:
    return [
        GoodPairsTestCase(
            nums=[1, 2, 3],
            expected=0,
        ),
        GoodPairsTestCase(
            nums=[1, 1, 1, 1],
            expected=6,
        ),
        GoodPairsTestCase(
            nums=[1, 2, 3, 1, 1, 3],
            expected=4,
        ),
    ]


def test_num_good_pairs(test_cases: list[GoodPairsTestCase]) -> None:
    for tc in test_cases:
        assert num_good_pairs(tc.nums) == tc.expected
