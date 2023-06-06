fn is_palindrome(s: &str) -> bool {
    let mut start = 0;
    let mut end = s.len().saturating_sub(1);
    let chars = s.chars().collect::<Vec<char>>();

    while start < end {
        while start < end && !chars[start].is_ascii_alphanumeric() {
            start += 1;
        }

        while start < end && !chars[end].is_ascii_alphanumeric() {
            end -= 1;
        }

        if chars[start].to_ascii_lowercase() != chars[end].to_ascii_lowercase() {
            return false;
        }

        start += 1;
        end -= 1;
    }

    true
}

#[cfg(test)]
pub mod test {
    use super::*;

    #[test]
    fn test_is_palindrome() {
        let test_cases = [
            ("A man, a plan, a canal, Panama!", true),
            ("race a car", false),
            ("Was it a car or a cat I saw?", true),
            ("Madam, in Eden, I'm Adam.", true),
            ("", true),
        ];

        for (s, expected) in test_cases {
            assert_eq!(is_palindrome(s), expected);
        }
    }
}
