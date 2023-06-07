use std::collections::HashMap;

fn is_anagram(s: &str, t: &str) -> bool {
    if s.len() != t.len() {
        return false;
    }

    let mut counter: HashMap<char, i32> = HashMap::new();

    s.chars().zip(t.chars()).for_each(|(sc, tc)| {
        *counter.entry(sc).or_insert(0) += 1;
        *counter.entry(tc).or_insert(0) -= 1;
    });

    counter.values().all(|&val| val == 0)
}

#[cfg(test)]
pub mod test {
    use super::*;

    #[test]
    fn test_is_anagram() {
        let test_cases = [
            ("listen", "silent", true),
            ("hello", "world", false),
            ("anagram", "nagaram", true),
            ("rat", "car", false),
            ("", "", true),
        ];

        for (s, t, expected) in test_cases {
            assert_eq!(is_anagram(s, t), expected);
        }
    }
}
