fn pair_with_target_sum(arr: Vec<i32>, target: i32) -> Vec<i32> {
    let (mut start, mut end) = (0, arr.len() - 1);

    while start < end {
        let (a, b) = (arr[start], arr[end]);

        if a + b < target {
            start += 1;
        } else if a + b > target {
            end -= 1;
        } else {
            return vec![start as i32, end as i32];
        }
    }

    vec![-1, -1]
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_pair_with_target_sum() {
        let test_cases = [
            (vec![1, 2, 3, 4, 6], 6, vec![1, 3]),
            (vec![2, 5, 9, 11], 11, vec![0, 2]),
        ];
        
        for (arr, target, expected) in test_cases {
            assert_eq!(pair_with_target_sum(arr, target), expected);
        }
    }
}
