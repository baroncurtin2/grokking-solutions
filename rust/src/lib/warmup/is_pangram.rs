use std::collections::HashSet;

fn is_pangram(sentence: &str) -> bool {
    // time: O(n)
    // space: O(1)
    let set: HashSet<char> = sentence
        .to_lowercase()
        .chars()
        .filter(|&c| c.is_ascii_alphabetic())
        .collect();

    set.len() == 26
}

#[cfg(test)]
pub mod test {
    use super::*;

    #[test]
    fn test_is_pangram() {
        let test_cases = [
            ("This is not a pangram", false),
            ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", true),
        ];

        for (sentence, expected) in test_cases {
            assert_eq!(is_pangram(sentence), expected);
        }
    }
}