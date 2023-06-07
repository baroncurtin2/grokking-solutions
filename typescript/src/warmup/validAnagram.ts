export function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    
    type Counter = {
        [key: string]: number
    }
    
    const counter: Counter = {};

    for (let i = 0; i < s.length; i++) {
        counter[s[i]] = (counter[s[i]] || 0) + 1
        counter[t[i]] = (counter[t[i]] || 0) - 1
    }

    for (const val of Object.values(counter)) {
        if (val != 0) {
            return false;
        }
    }

    return true;
}