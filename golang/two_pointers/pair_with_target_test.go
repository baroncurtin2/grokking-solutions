package two_pointers

import (
	"testing"

	"github.com/stretchr/testify/require"
)

type pairWithTargetTestCase struct {
	arr      []int
	target   int
	expected []int
}

var pairWithTargetTestCases = []pairWithTargetTestCase{
	{
		arr: []int{1, 2, 3, 4, 6},
		target: 6,
		expected: []int{1, 3},
	},
	{
		arr: []int{2, 5, 9, 11},
		target: 11,
		expected: []int{0, 2},
		},
}

func Test_pairWithTargetSum(t *testing.T) {
	for _, tc := range pairWithTargetTestCases {
		actual := pairWithTargetSum(tc.arr, tc.target)

		require.Equal(t, tc.expected, actual)
		require.Len(t, actual, 2)
	}
}