# Day 1 - 27th March 2026, Friday:

- Hi from today I am starting to code in Javascript (seriously).
- I have been running away from logical Javascript when I dreamed of becoming an Engineer until I realised how weak I was in thinking to code logic.
- I realised I needed practice, patience and persistence to become an Engineer and not just a person with a degree.
- So from today I am diving into this vast ocean of logic building.
- This is just a log for me to keep track of what I am actually doing and its for my reference.
- They say its lonely when you reach higher in life but for me its different. Its lonely for me now because I am the only person who can help me learn this.
- So I am here. I won't promise that this will be daily but i'll try to be consistent. Instead of daily, I want to say "Atleast thrice a week". Because I am a 'P' so I kind of run away from rigid structures but I like challenges too.

1. day-01-reverse-string-1.js

- Today I wrote a program to reverse string by myself after failing to recall the logic in an interview the day before yesterday. And I actually wrote it perfectly today. Yes I didn't get pass the round but that gave me a lesson to improve myself.

2. day-01-reverse-2.js

- Not only that, I wrote another reverse program but of just words.

3. day-01-palindrome.js

- And then I wrote palindrome program with the help of chatgpt. Ofcourse I tried myself first but it was incorrect logic. I used for loop instead of while loop. I remembered why because when we don't know how long will be the process until the first and last pointer value doesn't match. Lesson learned.

4. day-01-count-vowels.js

- Then I wrote count vowels program by myself without any help. Yes, I did that. Then chatgpt gave me a new and optimized way to write it. It's in the same file so I can compare.

5. day-01-ascii-1.js

- Now I remembered one more question which recruiters may ask. Take a string and print the next letter. I tried writing it by disecting the logic using console.log refering the logical nudge which chatgpt gave me. I did that step-by-step, very slowly. And finally reached a part where I got the answer I wanted!

- That's it for today. Signing off!

# Day 2 - 28th March 2026, Saturday:

- Today is my second day of practicing coding in Javascript.
- I still feel like coding today.

1. day-02-ascii-2.js

- Today I wrote the first program again based on ascii logic. I don't know why I am kind of interested in ascii. So I am thinking how a simple program based on ascii can be twisted and turned so it gives different answers. In short, I am thinking of variations and challenging myself with ascii logic. The first code I wrote today was a "Program to eliminate vowels from a string and display that string without vowels". Interesting right? It might not be new for you maybe but for me it was something I never tried. I brainstormed this question and wrote code by myself.

2. day-02-ascii-3.js

- Next program "To shift vowels and consonents by one letter in a string". Here I made two different functions to solve it: one for vowels and other for consonents. Because why I should make two different files for similar logic? Also its good to have these in one file so I can compare what I did different. Ofcourse, there is some difference in it. While it was simple for vowels, consonents needed some "special treatment" in terms of logic handling. When I wrote the code for consonents, I observed that the special characters were appearing in the output too. I just wrote "Shift one if not a vowel" but what about when consonents changes to special characters like "@ ! $.. etc" ??
- So I asked chatgpt what can I do to make this right. Thats where "nested if else" came into picture. I was like "Why this didn't clicked me??". Now here the simple logic gets its nesting by checking first "Is the letter an alphabet?" if yes then "Check if its vowel or consonent" if vowel then "Add it into result as it is (don't change)" else if its a consonent then "Change it by adding one to its ascii and convert to String" else if its not a letter then "Add it also to result (don't change)". Thats it.


# Day 3 - 29th March 2026, Sunday:

- Hello. Today I am not feeling well. But I'll try to code anyway. Let's go!

1. day-03-count-words.js
- I don't think I need to explain this further. But here I learned something new too.
- I made a copy of the original string when it didn't require. Because you only copy the data which is changing the real value of the global variable.
- So here is small mental note I asked chatgpt to give me because I don't feel like typing it out today. That's okay. All days are not same.

```Mental Note - Working with strings in JavaScript``
- Strings are immutable
  - Methods like split(), toLowerCase() do not change original string

- When NO extra variable needed?
    - When you are just using the string
    str.split(" ")
    - Original str stays same

- When to use new variable
    - When you need a modified version
    - let strLower = str.toLowerCase();

    - Keep original safe
    - Work on transformed version

- Avoid unnecessary copy
let strCopy = str; // not useful

- No transformation → no need

- Rule
Use directly → no copy
Transform → store in new variable

2. day-03-non-repeating.js
- I asked chatgpt to give me another challenge but I didn't mentioned that I want somehing easy for today. So it gave me this. nested for-loop for a tough day. Nice.
- I anyway decided to try. Brain fog is real. I knew what should be done but I just couldn't think in code logic.
- I asked it to give me hint. I did solve but it wasn't making sense to me. So I decided to not stress too much. I'll look into this tomorrow with a fresh mind and try to solve similar problems. Or when I feel like.
- It's not about being right it's about trying. You can't look at a new method and say "Why this didn't click me earlier? Am I dumb?" No one is dumb. All we need is practice. And a fresh mind.

- Signing off!

# Day 4 - 8th April 2026, Wednesday:

- Its direct 8th april now. I didnt practice for so long but I made a finance ui dashbaord for a company using React.js. I learnt so many things making that even logic.
- I'm back today to practice logic again.

1. day-04-count-consonants.js
- I don't think I need to explain this.

2. day-04-only-number.js
- If there is only number then output is true else its false. Right? WRONG.
- Yes its true for only numbers but with a twist.
- If there is letter or special character in the code its false first or else its true.
- Here we first look if its not true to start with, then if it fails, its true.
- Like how life tests us through hardships first so we understand whats true.