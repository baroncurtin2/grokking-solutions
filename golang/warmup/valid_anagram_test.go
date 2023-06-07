package warmup

import (
	"testing"

	"github.com/stretchr/testify/require"
)

type validAnagramTest struct {
	s        string
	t        string
	expected bool
}

var validAnagramTests = []validAnagramTest{
	{
		s:        "listen",
		t:        "silent",
		expected: true,
	},
	{
		s:        "hello",
		t:        "world",
		expected: false,
	},
	{
		s:        "anagram",
		t:        "nagaram",
		expected: true,
	},
	{
		s:        "rat",
		t:        "car",
		expected: false,
	},
	{
		s:        "",
		t:        "",
		expected: true,
	},
}

func Test_isAngram(t *testing.T) {
	for _, tc := range validAnagramTests {
		actual := isAnagram(tc.s, tc.t)

		require.Equal(t, tc.expected, actual)
	}
}

