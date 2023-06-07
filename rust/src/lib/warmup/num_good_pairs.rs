use std::collections::HashMap;

fn num_good_pairs(nums: &[i32]) -> i32 {
    let mut pairs = 0;
    let mut freq_map: HashMap<i32, i32> = HashMap::new();

    for &n in nums {
        *freq_map.entry(n).or_insert(0) += 1;
        pairs += freq_map[&n] - 1;
    }

    pairs
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_num_good_pairs() {
        assert_eq!(num_good_pairs(&[1, 2, 3, 1, 1, 3]), 4);
        assert_eq!(num_good_pairs(&[1, 1, 1, 1]), 6);
        assert_eq!(num_good_pairs(&[1, 2, 3]), 0);
    }
}