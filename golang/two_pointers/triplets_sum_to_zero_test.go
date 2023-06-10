package two_pointers

import (
	"github.com/stretchr/testify/require"
	"testing"
)

type searchTripletsTestCase struct {
	arr      []int
	expected []triplet
}

var searchTripletsTestCases = []searchTripletsTestCase{
	{
		arr:      []int{-3, 0, 1, 2, -1, 1, -2},
		expected: []triplet{{-3, 1, 2}, {-2, 0, 2}, {-2, 1, 1}, {-1, 0, 1}},
	},
	{
		arr:      []int{-5, 2, -1, -2, 3},
		expected: []triplet{{-5, 2, 3}, {-2, -1, 3}},
	},
}

func Test_searchTriplets(t *testing.T) {
	for _, tc := range searchTripletsTestCases {
		actual := searchTriplets(tc.arr)

		require.Equal(t, tc.expected, actual)
	}
}