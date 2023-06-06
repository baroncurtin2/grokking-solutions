export function isPalindrome(s: string): boolean {
    let start = 0, end = s.length - 1;

    while (start < end) {
        while (start < end && !isAlphanumeric(s[start])) {
            start++;
        }

        while (start < end && !isAlphanumeric(s[end])) {
            end--;
        }

        if (s[start].toLowerCase() != s[end].toLowerCase()) {
            return false;
        }

        start++;
        end--;
    }

    return true;
}

function isAlphanumeric(char: string): boolean {
    return !!char.match(/^[a-zA-Z0-9]+$/i);
}