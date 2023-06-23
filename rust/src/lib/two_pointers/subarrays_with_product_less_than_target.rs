pub fn find_subarrays(arr: &[i32], target: i32) -> Vec<Vec<i32>> {
    let mut result: Vec<Vec<i32>> = Vec::new();
    let mut product: f64 = 1.0;
    let mut left: usize = 0;

    for right in 0..arr.len() {
        product *= f64::from(arr[right]);

        while product >= f64::from(target) && left < arr.len() {
            product /= f64::from(arr[left]);
            left += 1;
        }

        let mut temp_list: Vec<i32> = Vec::new();
        for i in (left..=right).rev() {
            temp_list.insert(0, arr[i]);
            result.push(temp_list.clone());
        }
    }

    result
}

#[cfg(test)]
mod tests {
    use super::*;

    struct SubarraysProductLessThanTargetTestCase {
        arr: Vec<i32>,
        target: i32,
        expected: Vec<Vec<i32>>,
    }

    #[test]
    fn test_triplet_sum_close_to_target() {
        let test_cases = vec![
            SubarraysProductLessThanTargetTestCase {
                arr: vec![2, 5, 3, 10],
                target: 30,
                expected: vec![vec![2], vec![5], vec![2, 5], vec![3], vec![5, 3], vec![10]],
            },
            SubarraysProductLessThanTargetTestCase {
                arr: vec![8, 2, 6, 5],
                target: 50,
                expected: vec![
                    vec![8],
                    vec![2],
                    vec![8, 2],
                    vec![6],
                    vec![2, 6],
                    vec![5],
                    vec![6, 5],
                ],
            },
            SubarraysProductLessThanTargetTestCase {
                arr: vec![1, 2, 3, 4, 5],
                target: 10,
                expected: vec![
                    vec![1],
                    vec![2],
                    vec![1, 2],
                    vec![3],
                    vec![2, 3],
                    vec![1, 2, 3],
                    vec![4],
                    vec![5],
                ],
            },
        ];

        for case in test_cases {
            let mut arr = case.arr.clone();
            let result = find_subarrays(&mut arr, case.target);
            assert_eq!(result, case.expected);
        }
    }
}
