fn triplet_sum_close_to_target(arr: &mut [i32], target_sum: i32) -> i32 {
    arr.sort();

    let mut smallest_diff = i32::MAX;

    for i in 0..arr.len() - 2 {
        let mut left = i + 1;
        let mut right = arr.len() - 1;

        while left < right {
            let current_sum = arr[i] + arr[left] + arr[right];
            let target_diff = target_sum - current_sum;

            if target_diff == 0 {
                return target_sum;
            }

            if (target_diff.abs() < smallest_diff.abs())
                || (target_diff.abs() == smallest_diff.abs() && target_diff > smallest_diff)
            {
                smallest_diff = target_diff;
            }

            if target_diff > 0 {
                left += 1;
            } else {
                right -= 1;
            }
        }
    }

    (target_sum - smallest_diff) as i32
}

#[cfg(test)]
mod tests {
    use super::*;

    struct TripletSumCloseTestCase {
        arr: Vec<i32>,
        target_sum: i32,
        expected: i32,
    }

    #[test]
    fn test_triplet_sum_close_to_target() {
        let test_cases = vec![
            TripletSumCloseTestCase {
                arr: vec![-1, 0, 2, 3],
                target_sum: 3,
                expected: 2,
            },
            TripletSumCloseTestCase {
                arr: vec![-3, -1, 1, 2],
                target_sum: 1,
                expected: 0,
            },
            TripletSumCloseTestCase {
                arr: vec![1, 0, 1, 1],
                target_sum: 100,
                expected: 3,
            },
            TripletSumCloseTestCase {
                arr: vec![0, 0, 1, 1, 2, 6],
                target_sum: 5,
                expected: 4,
            },
        ];

        for case in test_cases {
            let mut arr = case.arr.clone();
            let result = triplet_sum_close_to_target(&mut arr, case.target_sum);
            assert_eq!(result, case.expected);
        }
    }
}
