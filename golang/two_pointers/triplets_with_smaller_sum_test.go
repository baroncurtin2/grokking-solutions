package two_pointers

import (
	"github.com/stretchr/testify/require"
	"testing"
)

type searchTripletsSmallerSumTestCase struct {
	arr      []int
	target   int
	expected int
}

var searchTripletsSmallerSumTestCases = []searchTripletsSmallerSumTestCase{
	{
		arr:      []int{-1, 0, 2, 3},
		target:   3,
		expected: 2,
	},
	{
		arr:      []int{-1, 4, 2, 1, 3},
		target:   5,
		expected: 4,
	},
	{
		arr:      []int{1, 2, 3, 4, 5},
		target:   10,
		expected: 6,
	},
	{
		arr:      []int{0, 0, 0, 0, 0},
		target:   1,
		expected: 10,
	},
	{
		arr:      []int{-1, -1, -1, 1, 1, 1},
		target:   1,
		expected: 10,
	},
	{
		arr:      []int{-2, -1, 0, 1, 2},
		target:   3,
		expected: 9,
	},
	{
		arr:      []int{1, 2, 3, 4, 5},
		target:   6,
		expected: 0,
	},
}

func Test_searchTripletsSmallerSum(t *testing.T) {
	for _, tc := range searchTripletsSmallerSumTestCases {
		actual := searchTripletsSmallerSum(tc.arr, tc.target)
		
		require.Equal(t, tc.expected, actual)
	}
}
