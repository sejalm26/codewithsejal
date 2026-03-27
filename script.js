// let h1 = document.querySelector("h1")

// window.addEventListener("keydown",function(dets){
//     if(dets.key === "Shift" || dets.key === "Alt" ){
//         h1.textContent = " "
//     }
//     h1.textContent += dets.key

// })

//reverse string
//1.

// function reverseString(str){
//     return str.split("").reverse().join("");
// }

// console.log(reverseString("srushti"));

// function reverse(str){
//     let result = "";
//     for(let i = str.length - 1; i >= 0; i-- ){
//         result += str[i];
//     }
//     return result;
// }

// console.log(reverse("sejal"));

// stri = "bts army";

// for(let i = 0; i<= stri.length-1; i++){
//  console.log(stri[i]);

// }

//remove duplicate

// const arr = [1,2,3,4,4,5,5];

// const unique = [...new Set(arr)];

// console.log(unique);

// function removeDup(arr) {
//   return arr.filter((item, index) => 
//     arr.indexOf(item) === index);
// }

var numbers = [1,2,3,4,5,6,7,8]
var filteredNums = numbers.filter(function(value){
  return value > 5;
});

console.log(filteredNums);
