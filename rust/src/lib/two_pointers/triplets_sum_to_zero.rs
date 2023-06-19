fn search_triplets(arr: &mut [i32]) -> Vec<[i32; 3]> {
    let mut triplets: Vec<[i32; 3]> = Vec::new();
    arr.sort();

    let mut i = 0;
    while i < arr.len() {
        if i > 0 && arr[i] == arr[i - 1] {
            i += 1;
            continue;
        }

        search_pair(arr, -arr[i], i + 1, &mut triplets);
        i += 1
    }

    triplets
}

fn search_pair(arr: &[i32], target: i32, mut left: usize, triplets: &mut Vec<[i32; 3]>) {
    let mut right = arr.len() - 1;

    while left < right {
        let total = arr[left] + arr[right];

        if total < target {
            left += 1;
        } else if total > target {
            right -= 1;
        } else {
            triplets.push([-target, arr[left], arr[right]]);
            left += 1;
            right -= 1;

            while left < right && arr[left] == arr[left - 1] {
                left += 1;
            }

            while left < right && arr[right] == arr[right + 1] {
                right -= 1;
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[derive(Debug, PartialEq)]
    struct TestCase {
        arr: Vec<i32>,
        expected: Vec<[i32; 3]>,
    }

    #[test]
    fn test_search_triplets() {
        let tests = vec![
            TestCase {
                arr: vec![-3, 0, 1, 2, -1, 1, -2],
                expected: vec![[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]],
            },
            TestCase {
                arr: vec![-5, 2, -1, -2, 3],
                expected: vec![[-5, 2, 3], [-2, -1, 3]],
            },
        ];

        for (idx, test) in tests.iter().enumerate() {
            let mut arr = test.arr.clone();
            let result = search_triplets(arr.as_mut_slice());

            assert_eq!(test.expected.len(), result.len());
            for expected in &test.expected {
                assert!(result.contains(expected));
            }
        }
    }
}
