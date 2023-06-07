# Shortest Word Distance (easy)

## Problem Statement

---

Given an array of strings `words` and two different strings that already exist
in the array `word1` and `word2`, return the shortest distance between these
two words in the list.

### Example 1:

```
Input: words = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy",
"dog"], word1 = "fox", word2 = "dog"
Output: 5
Explanation: The distance between "fox" and "dog" is 5 words.
```

### Example 2:

```
Input: words = ["a", "c", "d", "b", "a"], word1 = "a", word2 = "b"
Output: 1
Explanation: The shortest distance between "a" and "b" is 1 word. Please note
that "a" appeared twice.
```

### Example 3:

```
Input: words = ["a", "b", "c", "d", "e"], word1 = "a", word2 = "e"
Output: 4
Explanation: The distance between "a" and "e" is 4 words.
```
