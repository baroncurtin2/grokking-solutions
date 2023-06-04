package warmup

import (
	"testing"

	"github.com/stretchr/testify/require"
)

type reverseVowelsTest struct {
	s        string
	expected string
}

var reverseVowelsTests = []reverseVowelsTest{
	{
		s: "hello",
		expected: "holle",
	},
	{
		s: "DesignGUrus",
		expected: "DusUgnGires",
	},
	{
		s: "AEIOU",
		expected: "UOIEA",
	},
	{
		s: "aA",
		expected: "Aa",
	},
	{
		s: "",
		expected: "",
	},
}

func Test_reverseVowels(t *testing.T) {
	for _, tc := range reverseVowelsTests {
		actual := reverseVowels(tc.s)

		require.Equal(t, tc.expected, actual)
	}
}