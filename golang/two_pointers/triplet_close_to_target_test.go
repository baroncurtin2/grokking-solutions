package two_pointers

import (
	"github.com/stretchr/testify/require"
	"testing"
)

type tripletCloseToTargetTestCase struct {
	arr       []int
	targetSum int
	expected  int
}

var tripletCloseToTargetTestCases = []tripletCloseToTargetTestCase{
	{
		arr:       []int{-1, 0, 2, 3},
		targetSum: 3,
		expected:  2,
	},
	{
		arr:       []int{-3, -1, 1, 2},
		targetSum: 1,
		expected:  0,
	},
	{
		arr:       []int{1, 0, 1, 1},
		targetSum: 100,
		expected:  3,
	},
	{
		arr:       []int{0, 0, 1, 1, 2, 6},
		targetSum: 5,
		expected:  4,
	},
}

func Test_tripletSumCloseToTarget(t *testing.T) {
	for _, tc := range tripletCloseToTargetTestCases {
		actual := tripletSumCloseToTarget(tc.arr, tc.targetSum)

		require.Equal(t, tc.expected, actual)
	}
}
