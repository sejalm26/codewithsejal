# JavaScript Logic Building

So I started this because I kept running away from logical JavaScript. I had this moment where I failed to recall how to reverse a string in an interview and I was like okay enough. I need to actually sit down and think in code, not just write it.

This repo is my practice log. Every problem here — I tried it myself first. Sometimes I got it right, sometimes I got it completely wrong, and both are documented. I used ChatGPT only after attempting, mostly for hints or to show me a cleaner version. Never to just get the answer.

The goal isn't to collect solutions. It's to actually understand why something works.

---

## How the files are named

`day-XX-problem-name.js`

If I solved variations of the same concept, they're in the same file — not separate ones. That way I can actually compare what I did differently.

---

## What I solved and what I learned

### Day 1 — String basics

**`day-01-reverse-string-1.js`**  
Reverse a string. This was literally the question I blanked on in the interview the day before. Wrote it the next day and got it right. Lesson learned the hard way but it stayed.

**`day-01-reverse-2.js`**  
Same idea but reversed only the words, not the characters. Different split and join logic.

**`day-01-palindrome.js`**  
Check if a string reads the same forwards and backwards. My first attempt used a `for` loop and it was wrong. The fix was switching to `while` — because when you don't know how many steps it'll take (you stop when the first and last pointer values don't match), `while` makes more sense than `for`. That clicked for me here.

**`day-01-count-vowels.js`**  
Count the vowels in a string. Solved it myself, then ChatGPT showed me a regex version. Both are in the same file.

**`day-01-ascii-1.js`**  
Take a string and print the next letter for each character using ASCII codes. I broke it down step by step using `console.log` to check each part before putting it together. Slow but it worked.

---

### Day 2 — Going deeper into ASCII

At this point I got a little obsessed with ASCII logic and started making up my own variations to see how far I could take it.

**`day-02-ascii-2.js`**  
Remove all vowels from a string using ASCII. Self-initiated — wasn't from any list.

**`day-02-ascii-3.js`**  
Shift vowels and consonants forward by one letter. Two functions in the same file — one for vowels, one for consonants — because the logic is similar enough to compare but different enough to need separate handling.

The tricky part: when you shift a consonant near the end of the alphabet, it crosses into special characters like `@` or `!`. I didn't think about that at first. The fix was nesting the condition:
- Is it even an alphabet character?
- If yes — vowel or consonant?
- If consonant — shift by one ASCII value
- If not a letter at all — leave it as is

That's where nested `if-else` stopped being a textbook thing and became something I actually needed.

---

### Day 3 — Coding on a bad day

**`day-03-count-words.js`**  
Count words in a string. Simple enough, but I made a mistake — I copied the original string into a new variable when I didn't need to. The learning here was about string immutability: `split()`, `toLowerCase()` etc. don't touch the original string. You only need a new variable when you're working with a transformed version of the data. Otherwise just use the method output directly.

**`day-03-non-repeating.js`**  
Find the first non-repeating character. I tried this on a sick day and genuinely could not get my brain to write the logic out even though I knew what needed to happen. I kept the partial attempt in the file. Not every session goes well and that's fine.

---

### Day 4 — Boolean logic and thinking backwards

**`day-04-count-consonants.js`**  
Count consonants. Straightforward after day 2.

**`day-04-only-number.js`**  
Return `true` if the string has only numbers, `false` if not. The interesting part was the logic direction — instead of checking "is it a number," I checked "does it fail to be a number first." If it fails, return false. If it doesn't fail, return true. Negative-first thinking.

---

### Day 5

**`day-05-only-letters.js`**  
Return `true` if the string has only alphabet characters.

**`day-05-largest-digit.js`**  
Find the largest digit in a mixed string. Needed to filter out non-numeric characters first, then compare.

---

## Concepts this covers

| Concept | File |
|---|---|
| Two-pointer logic | `day-01-palindrome.js` |
| When to use `while` vs `for` | `day-01-palindrome.js` |
| ASCII character codes | `day-01-ascii-1.js`, `day-02-*` |
| Nested conditionals and edge cases | `day-02-ascii-3.js` |
| String immutability | `day-03-count-words.js` |
| Intermediate variables — when and why | `day-03-count-words.js` |
| Negative-first conditional logic | `day-04-only-number.js` |
| Type conversion | `day-05-largest-digit.js` |
| Regex as an optimization | `day-01-count-vowels.js` |

---

## Stack
- JavaScript (ES6+)
- Node.js
- Console-based testing

---

> Started this to get better at thinking in code — not just writing it.