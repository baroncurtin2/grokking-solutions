package two_pointers

import (
	"github.com/stretchr/testify/require"
	"testing"
)

type makeSquaresTestCase struct {
	arr      []int
	expected []int
}

var makeSquaresTestCases = []makeSquaresTestCase{
	{
		arr:      []int{-2, -1, 0, 2, 3},
		expected: []int{0, 1, 4, 4, 9},
	},
	{
		arr:      []int{-3, -1, 0, 1, 2},
		expected: []int{0, 1, 1, 4, 9},
	},
}

func Test_makeSquares(t *testing.T) {
	for _, tc := range makeSquaresTestCases {
		actual := makeSquares(tc.arr)

		require.Equal(t, tc.expected, actual)
	}
}
