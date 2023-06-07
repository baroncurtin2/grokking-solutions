from grokking.warmup.valid_anagram import is_anagram

import pytest

from dataclasses import dataclass


@dataclass
class ValidAnagramTestCase:
    s: str
    t: str
    expected: bool


@pytest.fixture
def test_cases() -> list[ValidAnagramTestCase]:
    return [
        ValidAnagramTestCase(
            s="listen",
            t="silent",
            expected=True,
        ),
        ValidAnagramTestCase(
            s="hello",
            t="world",
            expected=False,
        ),
        ValidAnagramTestCase(
            s="anagram",
            t="nagaram",
            expected=True,
        ),
        ValidAnagramTestCase(
            s="rat",
            t="car",
            expected=False,
        ),
        ValidAnagramTestCase(
            s="",
            t="",
            expected=True,
        ),
    ]


def test_is_anagram(test_cases) -> None:
    for tc in test_cases:
        assert is_anagram(tc.s, tc.t) == tc.expected
