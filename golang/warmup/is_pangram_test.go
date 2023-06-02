package warmup

import (
	"testing"

	"github.com/stretchr/testify/require"
)

type isPangramTest struct {
	sentence string
	expected bool
}

var isPangramTests = []isPangramTest{
	{
		sentence: "This is not a pangram",
		expected: false,
	},
	{
		sentence: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
		expected: true,
	},
}

func Test_isPangram(t *testing.T) {
	for _, tc := range isPangramTests {
		actual := isPangram(tc.sentence)

		require.Equal(t, tc.expected, actual)
	}
}