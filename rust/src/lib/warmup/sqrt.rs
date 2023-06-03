fn my_sqrt(x: i32) -> i32 {
    if x < 2 {
        return x;
    }

    let mut left = 2;
    let mut right = x / 2;

    while left <= right {
        let pivot = left + (right - left) / 2;
        let num = pivot * pivot;

        if num > x {
            right = pivot - 1;
        } else if num < x {
            left = pivot + 1;
        } else {
            return pivot;
        }
    }

    right
}

#[cfg(test)]
pub mod test {
    use super::*;

    #[test]
    fn test_sqrt() {
        let test_cases: [(i32, i32); 2] = [
            (15, 3),
            (4, 2),
        ];

        for (num, expected) in test_cases {
            assert_eq!(my_sqrt(num), expected);
        }
    }
}