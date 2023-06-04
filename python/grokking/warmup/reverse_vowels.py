def reverse_vowels(s: str) -> str:
    vowels = set("aeiouAEIOU")
    start, end = 0, len(s) - 1
    result = list(s)

    while start < end:
        while start < end and result[start] not in vowels:
            start += 1

        while start < end and result[end] not in vowels:
            end -= 1

        # switch vowels
        result[start], result[end] = result[end], result[start]

        start += 1
        end -= 1

    return "".join(result)
