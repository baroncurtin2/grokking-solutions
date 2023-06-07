package warmup

import (
	"testing"

	"github.com/stretchr/testify/require"
)

type shortestDistanceTest struct {
	words    []string
	word1    string
	word2    string
	expected int
}

var shortestDistanceTests = []shortestDistanceTest{
	{
		words:    []string{"the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"},
		word1:    "fox",
		word2:    "dog",
		expected: 5,
	},
	{
		words:    []string{"a", "b", "c", "d", "a", "b"},
		word1:    "a",
		word2:    "b",
		expected: 1,
	},
	{
		words:    []string{"a", "c", "d", "b", "a"},
		word1:    "a",
		word2:    "b",
		expected: 1,
	},
}

func Test_shortestDistance(t *testing.T) {
	for _, tc := range shortestDistanceTests {
		actual := shortestDistance(tc.words, tc.word1, tc.word2)

		require.Equal(t, tc.expected, actual)
	}
}
