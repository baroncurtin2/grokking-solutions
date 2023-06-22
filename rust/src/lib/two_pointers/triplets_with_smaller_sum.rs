fn search_triplets(arr: &[i32], target: i32) -> i32 {
    let mut count = 0;
    let mut sorted_arr = arr.to_vec();
    sorted_arr.sort();

    for i in 0..sorted_arr.len() - 2 {
        count += search_pair(&sorted_arr, target - arr[i], i);
    }

    count
}

fn search_pair(arr: &[i32], target: i32, first: usize) -> i32 {
    let mut count = 0;
    let (mut left, mut right) = (first + 1, arr.len() - 1);

    while left < right {
        if arr[left] + arr[right] < target {
            count += (right - left) as i32;
            left += 1;
        } else {
            right -= 1;
        }
    }

    count
}

#[cfg(test)]
mod tests {
    use super::*;

    #[derive(Debug, PartialEq)]
    struct TestCase {
        arr: Vec<i32>,
        target: i32,
        expected: i32,
    }

    #[test]
    fn test_search_triplets() {
        let tests = vec![
            TestCase {
                arr: vec![-1, 0, 2, 3],
                target: 3,
                expected: 2,
            },
            TestCase {
                arr: vec![-1, 4, 2, 1, 3],
                target: 5,
                expected: 4,
            },
            TestCase {
                arr: vec![1, 2, 3, 4, 5],
                target: 10,
                expected: 6,
            },
            TestCase {
                arr: vec![0, 0, 0, 0, 0],
                target: 1,
                expected: 10,
            },
            TestCase {
                arr: vec![-1, -1, -1, 1, 1, 1],
                target: 1,
                expected: 10,
            },
            TestCase {
                arr: vec![-2, -1, 0, 1, 2],
                target: 3,
                expected: 9,
            },
            TestCase {
                arr: vec![1, 2, 3, 4, 5],
                target: 6,
                expected: 0,
            },
        ];

        for (idx, test) in tests.iter().enumerate() {
            let mut arr = test.arr.clone();
            let result = search_triplets(&test.arr, test.target);

            assert_eq!(test.expected, result);
        }
    }
}
