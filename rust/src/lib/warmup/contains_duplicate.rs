fn contains_duplicate_brute_force(nums: &[i32]) -> bool {
    // time: O(n^2)
    // space: O(1)

    nums.iter().enumerate().any(|(i, &num1)| {
        nums[i + 1..].iter().any(|&num2| num1 == num2)
    })
}

fn contains_duplicate_set(nums: &[i32]) -> bool {
    // time: O(n)
    // space: O(n)
    let mut uniques = std::collections::HashSet::new();

    nums.iter().any(|&num| !uniques.insert(num))
}

fn contains_duplicate_sorting(nums: &[i32]) -> bool {
    // time: O(nlogn)
    // space: O(n)
    let mut nums = nums.to_vec();
    nums.sort();

    nums.windows(2).any(|window| window[0] == window[1])
}

#[cfg(test)]
pub mod test {
    use super::*;

    #[test]
    fn test_contains_duplicate_brute_force() {
        test_contains_duplicate(contains_duplicate_brute_force);
    }

    #[test]
    fn test_contains_duplicate_set() {
        test_contains_duplicate(contains_duplicate_set);
    }

    #[test]
    fn test_contains_duplicate_sorting() {
        test_contains_duplicate(contains_duplicate_sorting);
    }

    fn test_contains_duplicate<F>(contains_duplicate: F)
    where
        F: Fn(&[i32]) -> bool,
    {
        let test_cases = [
            (&[1, 2, 3, 1], true),
            (&[3, 9, 1, 2], false),
        ];

        for &(nums, expected) in &test_cases {
            assert_eq!(contains_duplicate(nums), expected);
        }
    }
}