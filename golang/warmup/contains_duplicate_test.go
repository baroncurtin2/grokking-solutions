package warmup

import (
	"testing"

	"github.com/stretchr/testify/require"
)

type containsDuplicateTest struct {
	nums     []int
	expected bool
}

var containsDuplicateTests = []containsDuplicateTest{
	{
		[]int{1, 2, 3, 1},
		true,
	},
	{
		[]int{3, 9, 1, 2},
		false,
	},
}

func Test_containsDuplicateBruteForce(t *testing.T) {
	for _, tc := range containsDuplicateTests {
		actual := containsDuplicateBruteForce(tc.nums)

		require.Equal(t, tc.expected, actual)
	}
}

func Test_containsDuplicateSet(t *testing.T) {
	for _, tc := range containsDuplicateTests {
		actual := containsDuplicateSet(tc.nums)

		require.Equal(t, tc.expected, actual)
	}
}

func Test_containsDuplicateSorting(t *testing.T) {
	for _, tc := range containsDuplicateTests {
		actual := containsDuplicateSorting(tc.nums)

		require.Equal(t, tc.expected, actual)
	}
}
