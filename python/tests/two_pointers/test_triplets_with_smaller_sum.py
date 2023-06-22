from dataclasses import dataclass

import pytest

from grokking.two_pointers.triplets_with_smaller_sum import search_triplets


@dataclass
class SearchTripletsTestCase:
    arr: list[int]
    target: int
    expected: int


@pytest.fixture
def test_cases() -> list[SearchTripletsTestCase]:
    return [
        SearchTripletsTestCase(
            arr=[-1, 0, 2, 3],
            target=3,
            expected=2,
        ),
        SearchTripletsTestCase(
            arr=[-1, 4, 2, 1, 3],
            target=5,
            expected=4,
        ),
        SearchTripletsTestCase(
            arr=[1, 2, 3, 4, 5],
            target=10,
            expected=6,
        ),
        SearchTripletsTestCase(
            arr=[0, 0, 0, 0, 0],
            target=1,
            expected=10,
        ),
        SearchTripletsTestCase(
            arr=[-1, -1, -1, 1, 1, 1],
            target=1,
            expected=10,
        ),
        SearchTripletsTestCase(
            arr=[-2, -1, 0, 1, 2],
            target=3,
            expected=9,
        ),
        SearchTripletsTestCase(
            arr=[1, 2, 3, 4, 5],
            target=6,
            expected=0,
        ),
    ]


def test_search_triplets(test_cases) -> None:
    for tc in test_cases:
        assert search_triplets(tc.arr, tc.target) == tc.expected
