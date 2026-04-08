// Count and print vowels

let str = "sejal";

function countConsonants() {
  let strLower = str.toLowerCase();
  let count = 0;
  let result = "";

  for (let i = 0; i < strLower.length; i++) {
    let ch = strLower[i];
    if (ch >= "a" && ch <= "z") {
      if (!"aeiou".includes(ch)) {
        count++;
        result += str[i];
      }
    }
  }
  console.log(result, count);
}

countConsonants();