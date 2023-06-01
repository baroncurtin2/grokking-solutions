import pytest

from grokking.warmup.contains_duplicate import contains_duplicate_sorting, contains_duplicate_set, contains_duplicate_brute_force

from dataclasses import dataclass


@dataclass
class ContainsDuplicateTestCase:
    nums: list[int]
    expected: bool


@pytest.fixture
def test_cases() -> list[ContainsDuplicateTestCase]:
    return [
        ContainsDuplicateTestCase(
            nums=[1, 2, 3, 1],
            expected=True,
        ),
        ContainsDuplicateTestCase(
            nums=[3, 9, 1, 2],
            expected=False,
        ),
    ]


def test_contains_duplicate(test_cases) -> None:
    for tc in test_cases:
        assert contains_duplicate_brute_force(tc.nums) == tc.expected
        assert contains_duplicate_set(tc.nums) == tc.expected
        assert contains_duplicate_sorting(tc.nums) == tc.expected
