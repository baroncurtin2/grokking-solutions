use std::cmp;

fn shortest_distance(words: &[String], word1: &str, word2: &str) -> usize {
    let mut result = words.len();
    let (mut pos1, mut pos2) = (-1isize, -1isize);

    for (i, word) in words.iter().enumerate() {
        if word == word1 {
            pos1 = i as isize;
        } else if word == word2 {
            pos2 = i as isize;
        }

        if pos1 != -1 && pos2 != -1 {
            result = cmp::min(result, (pos1 - pos2).abs() as usize);
        }
    }

    result
}

#[cfg(test)]
pub mod test {
    use super::*;

    #[test]
    fn test_shortest_distance() {
        let test_cases = [
            (
                vec![
                    "the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog",
                ],
                "fox",
                "dog",
                5,
            ),
            (vec!["a", "b", "c", "d", "a", "b"], "a", "b", 1),
            (vec!["a", "c", "d", "b", "a"], "a", "b", 1),
        ];

        for (words, word1, word2, expected) in test_cases {
            let words_owned = words
                .iter()
                .map(|&word| word.to_string())
                .collect::<Vec<String>>();
            assert_eq!(shortest_distance(&words_owned, word1, word2), expected);
        }
    }
}
