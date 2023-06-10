from dataclasses import dataclass

import pytest

from grokking.two_pointers.square_sorted_array import make_squares


@dataclass
class MakeSquaresTestCase:
    arr: list[int]
    expected: list[int]


@pytest.fixture
def test_cases() -> list[MakeSquaresTestCase]:
    return [
        MakeSquaresTestCase(
            arr=[-2, -1, 0, 2, 3],
            expected=[0, 1, 4, 4, 9],
        ),
        MakeSquaresTestCase(
            arr=[-3, -1, 0, 1, 2],
            expected=[0, 1, 1, 4, 9],
        )
    ]


def test_make_squares(test_cases) -> None:
    for tc in test_cases:
        assert make_squares(tc.arr) == tc.expected
