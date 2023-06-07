package warmup

import (
	"testing"

	"github.com/stretchr/testify/require"
)

type goodPairsTest struct {
	nums     []int
	expected int
}

var goodPairsTests = []goodPairsTest{
	{
		nums:     []int{1, 2, 3},
		expected: 0,
	},
	{
		nums:     []int{1, 1, 1, 1},
		expected: 6,
	},
	{
		nums:     []int{1, 2, 3, 1, 1, 3},
		expected: 4,
	},
}

func Test_numGoodPairs(t *testing.T) {
	for _, tc := range goodPairsTests {
		actual := numGoodPairs(tc.nums)

		require.Equal(t, tc.expected, actual)
	}
}
