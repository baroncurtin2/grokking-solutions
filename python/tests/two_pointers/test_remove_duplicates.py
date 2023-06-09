from dataclasses import dataclass

import pytest

from grokking.two_pointers.remove_duplicates import remove_duplicates, remove_all_keys


@dataclass
class RemoveDupesTestCase:
    arr: list[int]
    expected: int


@dataclass
class RemoveKeysTestCase:
    arr: list[int]
    key: int
    expected: int


@pytest.fixture
def remove_dupes_test_cases() -> list[RemoveDupesTestCase]:
    return [
        RemoveDupesTestCase(
            arr=[2, 3, 3, 3, 6, 9, 9],
            expected=4,
        ),
        RemoveDupesTestCase(
            arr=[2, 2, 2, 11],
            expected=2,
        ),
    ]


@pytest.fixture
def remove_keys_test_cases() -> list[RemoveKeysTestCase]:
    return [
        RemoveKeysTestCase(
            arr=[3, 2, 3, 6, 3, 10, 9, 3],
            key=3,
            expected=4,
        ),
        RemoveKeysTestCase(
            arr=[2, 11, 2, 2, 1],
            key=2,
            expected=2,
        ),
    ]


def test_remove_dupes(remove_dupes_test_cases) -> None:
    for tc in remove_dupes_test_cases:
        assert remove_duplicates(tc.arr) == tc.expected


def test_remove_keys(remove_keys_test_cases) -> None:
    for tc in remove_keys_test_cases:
        assert remove_all_keys(tc.arr, tc.key) == tc.expected
