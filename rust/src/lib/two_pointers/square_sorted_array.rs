fn make_squares(arr: &[i32]) -> Vec<i32> {
    if arr.is_empty() {
        return Vec::new();
    }

    let n = arr.len();
    let mut high_sq_idx = n - 1;
    let mut squares = vec![0; n];

    let (mut left, mut right) = (0, n - 1);

    for high_sq_idx in (0..n).rev() {
        let left_sq = arr[left] * arr[left];
        let right_sq = arr[right] * arr[right];

        if left_sq > right_sq {
            squares[high_sq_idx] = left_sq;
            left += 1;
        } else {
            squares[high_sq_idx] = right_sq;
            right -= 1;
        }
    }

    squares
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_make_squares() {
        let test_cases = [
            (&[-2, -1, 0, 2, 3], &[0, 1, 4, 4, 9]),
            (&[-3, -1, 0, 1, 2], &[0, 1, 1, 4, 9]),
        ];

        for (arr, expected) in test_cases {
            assert_eq!(make_squares(arr), expected);
        }
    }
}

