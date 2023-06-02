import pytest

from grokking.warmup.pangram import is_pangram

from dataclasses import dataclass


@dataclass
class IsPangramTestCase:
    sentence: str
    expected: bool


@pytest.fixture
def test_cases() -> list[IsPangramTestCase]:
    return [
        IsPangramTestCase(
            sentence="This is not a pangram",
            expected=False,
        ),
        IsPangramTestCase(
            sentence="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
            expected=True,
        ),
    ]


def test_is_pangram(test_cases) -> None:
    for tc in test_cases:
        assert is_pangram(tc.sentence) == tc.expected
