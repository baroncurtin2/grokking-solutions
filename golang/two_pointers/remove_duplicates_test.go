package two_pointers

import (
	"github.com/stretchr/testify/require"
	"testing"
)

type removeDuplicatesTestCase struct {
	arr      []int
	expected int
}

var removeDuplicatesTestCases = []removeDuplicatesTestCase{
	{
		arr:      []int{2, 3, 3, 3, 6, 9, 9},
		expected: 4,
	},
	{
		arr:      []int{2, 2, 2, 11},
		expected: 2,
	},
}

func Test_removeDuplicates(t *testing.T) {
	for _, tc := range removeDuplicatesTestCases {
		actual := removeDuplicates(tc.arr)

		require.Equal(t, tc.expected, actual)
	}
}

type removeAllKeysTestCase struct {
	arr      []int
	key      int
	expected int
}

var removeAllKeysTestCases = []removeAllKeysTestCase{
	{
		arr:      []int{3, 2, 3, 6, 3, 10, 9, 3},
		key:      3,
		expected: 4,
	},
	{
		arr:      []int{2, 11, 2, 2, 1},
		key:      2,
		expected: 2,
	},
}

func Test_removeAllKeys(t *testing.T) {
	for _, tc := range removeAllKeysTestCases {
		actual := removeAllKeys(tc.arr, tc.key)

		require.Equal(t, tc.expected, actual)
	}
}
