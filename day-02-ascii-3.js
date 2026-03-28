// Program to pick vowels and shift one character ahead

let str = "Sejal and Jungkook@1234";

function shiftVowels() {
    let strLower = str.toLowerCase();
    let result = '';

    for (let i = 0; i < strLower.length; i++) {
        let ch = strLower[i];

        if (!('aeiou'.includes(ch))) {
            result += ch;
        }
        else {
            let newChar = String.fromCharCode(ch.charCodeAt(0) + 1)
            result += newChar
        }
    }
    console.log(result);
}

shiftVowels()

// Shifting consonents

function shiftConsonents() {
    let strLower = str.toLowerCase();
    let result = '';

    for (let i = 0; i < strLower.length; i++) {
        let ch = strLower[i];

        if (ch >= 'a' && ch <= 'z') {
            if ('aeiou'.includes(ch)) {
                result += ch;
            }
            else {
                let newChar = String.fromCharCode(ch.charCodeAt(0) + 1);
                result += newChar;
            }
        }
        else {
            result += ch;
        }

    }
    console.log(result);

}

shiftConsonents();