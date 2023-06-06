package warmup

import (
	"testing"

	"github.com/stretchr/testify/require"
)

type validPalindromeTest struct {
	s        string
	expected bool
}

var validPalindromeTests = []validPalindromeTest{
	{
		s:        "A man, a plan, a canal, Panama!",
		expected: true,
	},
	{
		s:        "ace a car",
		expected: false,
	},
	{
		s:        "Was it a car or a cat I saw?",
		expected: true,
	},
	{
		s:        "Madam, in Eden, I'm Adam.",
		expected: true,
	},
	{
		s:        "",
		expected: true,
	},
}

func Test_isPalindrome(t *testing.T) {
	for _, tc := range validPalindromeTests {
		actual := isPalindrome(tc.s)

		require.Equal(t, tc.expected, actual)
	}
}
