fn remove_duplicates(arr: &mut [i32]) -> usize {
    // time: O(n)
    // space: O(1)
    if arr.len() <= 1 {
        return arr.len();
    }

    let mut i = 0;
    let mut j = 1;

    while j < arr.len() {
        if arr[i] != arr[j] {
            i += 1;
            arr[i] = arr[j];
        }

        j += 1;
    }

    i + 1
}

fn remove_all_keys(arr: &mut [i32], key: i32) -> usize {
    // time: O(n)
    // space: O(1)
    let mut i = 0;

    for j in 0..arr.len() {
        if arr[j] != key {
            arr[i] = arr[j];
            i += 1;
        }
    }

    i
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_remove_duplicates() {
        let test_cases = [(vec![2, 3, 3, 3, 6, 9, 9], 4), (vec![2, 2, 2, 11], 2)];

        for (arr, expected) in test_cases {
            let mut arr = arr;
            assert_eq!(remove_duplicates(&mut arr), expected);
        }
    }

    #[test]
    fn test_remove_all_keyss() {
        let test_cases = [
            (vec![3, 2, 3, 6, 3, 10, 9, 3], 3, 4),
            (vec![2, 11, 2, 2, 1], 2, 2),
        ];

        for (arr, key, expected) in test_cases {
            let mut arr = arr;
            assert_eq!(remove_all_keys(&mut arr, key), expected);
        }
    }
}
