from dataclasses import dataclass

import pytest

from grokking.warmup.shortest_word_distance import shortest_distance


@dataclass
class WordDistanceTestCase:
    words: list[str]
    word1: str
    word2: str
    expected: int


@pytest.fixture
def test_cases() -> list[WordDistanceTestCase]:
    return [
        WordDistanceTestCase(
            words=["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"],
            word1="fox",
            word2="dog",
            expected=5,
        ),
        WordDistanceTestCase(
            words=["a", "b", "c", "d", "a", "b"],
            word1="a",
            word2="b",
            expected=1,
        ),
        WordDistanceTestCase(
            words=["a", "c", "d", "b", "a"],
            word1="a",
            word2="b",
            expected=1,
        ),
    ]


def test_word_distance(test_cases: list[WordDistanceTestCase]) -> None:
    for tc in test_cases:
        assert shortest_distance(tc.words, tc.word1, tc.word2) == tc.expected
