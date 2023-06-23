package two_pointers

import (
	"github.com/stretchr/testify/require"
	"testing"
)

type subArraysProductLessThanTargetTestCase struct {
	arr      []int
	target   int
	expected [][]int
}

var subArraysProductLessThanTargetTestCases = []subArraysProductLessThanTargetTestCase{
	{
		arr:    []int{2, 5, 3, 10},
		target: 30,
		expected: [][]int{
			{2}, {5}, {2, 5}, {3}, {5, 3}, {10},
		},
	},
	{
		arr:    []int{8, 2, 6, 5},
		target: 50,
		expected: [][]int{
			{8}, {2}, {8, 2}, {6}, {2, 6}, {5}, {6, 5},
		},
	},
	{
		arr:    []int{1, 2, 3, 4, 5},
		target: 10,
		expected: [][]int{
			{1}, {2}, {1, 2}, {3}, {2, 3}, {1, 2, 3}, {4}, {5},
		},
	},
}

func Test_findSubarrays(t *testing.T) {
	for _, tc := range subArraysProductLessThanTargetTestCases {
		actual := findSubarrays(tc.arr, tc.target)

		require.Equal(t, tc.expected, actual)
	}
}
