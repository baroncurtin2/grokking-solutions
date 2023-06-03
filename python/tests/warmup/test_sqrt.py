from dataclasses import dataclass

import pytest

from grokking.warmup.sqrt import my_sqrt


@dataclass
class SqrtTestCase:
    num: int
    expected: int


@pytest.fixture
def test_cases() -> list[SqrtTestCase]:
    return [
        SqrtTestCase(num=15, expected=3),
        SqrtTestCase(num=4, expected=2),
    ]


def test_sqrt(test_cases) -> None:
    for tc in test_cases:
        assert my_sqrt(tc.num) == tc.expected
