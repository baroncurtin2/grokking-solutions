use std::collections::HashSet;

fn is_vowel(c: char) -> bool {
    let vowels: HashSet<char> = "aeiou".chars().collect();
    vowels.contains(&c.to_ascii_lowercase())
}

fn reverse_vowels(s: &str) -> String {
    let mut start = 0;
    let mut end = s.len().saturating_sub(1);
    let mut result: Vec<char> = s.chars().collect();

    while start < end {
        while start < end && !is_vowel(result[start]) {
            start += 1;
        }

        while start < end && !is_vowel(result[end]) {
            end -= 1;
        }

        // switch vowels
        result.swap(start, end);

        start += 1;
        end -= 1;
    }

    result.into_iter().collect()
}

#[cfg(test)]
pub mod test {
    use super::*;

    #[test]
    fn test_reverse_vowels() {
        let test_cases = [
            ("hello", "holle"),
            ("DesignGUrus", "DusUgnGires"),
            ("AEIOU", "UOIEA"),
            ("aA", "Aa"),
            ("", ""),
        ];

        for (s, expected) in test_cases {
            assert_eq!(reverse_vowels(s), expected);
        }
    }
}
