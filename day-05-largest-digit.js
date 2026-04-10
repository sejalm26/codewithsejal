let str = "b72920";

function largestDigit() {
  let max = -Infinity;
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    let digit = Number(ch)
    if (ch >= "0" && ch <= "9") {
      if (digit > max) {
        max = digit;
      }
    }
  }
  console.log(max);
  
}

largestDigit();
