from dataclasses import dataclass

import pytest

from grokking.two_pointers.triple_sum_to_zero import search_triplets


@dataclass
class SearchTripletsTestCase:
    arr: list[int]
    expected: list[list[int]]


@pytest.fixture
def test_cases() -> list[SearchTripletsTestCase]:
    return [
        SearchTripletsTestCase(
            arr=[-3, 0, 1, 2, -1, 1, -2],
            expected=[[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]],
        ),
        SearchTripletsTestCase(
            arr=[-5, 2, -1, -2, 3],
            expected=[[-5, 2, 3], [-2, -1, 3]],
        ),
    ]


def test_search_triplets(test_cases) -> None:
    for tc in test_cases:
        assert search_triplets(tc.arr) == tc.expected
