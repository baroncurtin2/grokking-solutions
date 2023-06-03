package warmup

import (
	"testing"

	"github.com/stretchr/testify/require"
)

type sqrtTest struct {
	num      int
	expected int
}

var sqrtTests = []sqrtTest{
	{
		num:      15,
		expected: 3,
	},
	{
		num:      4,
		expected: 2,
	},
}

func Test_sqrt(t *testing.T) {
	for _, tc := range sqrtTests {
		actual := mySqrt(tc.num)

		require.Equal(t, tc.expected, actual)
	}
}
