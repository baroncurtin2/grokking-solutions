from dataclasses import dataclass

import pytest

from grokking.warmup.reverse_vowels import reverse_vowels


@dataclass
class ReverseVowelsTestCase:
    s: str
    expected: str


@pytest.fixture
def test_cases() -> list[ReverseVowelsTestCase]:
    return [
        ReverseVowelsTestCase(s="hello", expected="holle"),
        ReverseVowelsTestCase(s="DesignGUrus", expected="DusUgnGires"),
        ReverseVowelsTestCase(s="AEIOU", expected="UOIEA"),
        ReverseVowelsTestCase(s="aA", expected="Aa"),
        ReverseVowelsTestCase(s="", expected=""),
    ]


def test_reverse_vowels(test_cases) -> None:
    for tc in test_cases:
        assert reverse_vowels(tc.s) == tc.expected
