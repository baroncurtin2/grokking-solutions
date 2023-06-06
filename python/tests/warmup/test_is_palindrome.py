from dataclasses import dataclass

import pytest

from grokking.warmup.valid_palindrome import is_palindrome


@dataclass
class IsPalindromeTestCase:
    s: str
    expected: bool


@pytest.fixture
def test_cases() -> list[IsPalindromeTestCase]:
    return [
        IsPalindromeTestCase(
            s="A man, a plan, a canal, Panama!",
            expected=True,
        ),
        IsPalindromeTestCase(
            s="race a car",
            expected=False,
        ),
        IsPalindromeTestCase(
            s="Was it a car or a cat I saw?",
            expected=True,
        ),
        IsPalindromeTestCase(
            s="Madam, in Eden, I'm Adam.",
            expected=True,
        ),
        IsPalindromeTestCase(
            s="Madam, in Eden, I'm Adam.",
            expected=True,
        ),
    ]


def test_is_palindrome(test_cases) -> None:
    for tc in test_cases:
        assert is_palindrome(tc.s) == tc.expected
