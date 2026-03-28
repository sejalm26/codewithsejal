//Program to detect the number of vowels in a string

let str = "sejal"

// first attempt - own logic
function countVowel(){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ){
            count++;
        }
    }
    return count;
}

console.log(countVowel());


//Scalable and optimized

function countVowel2(){
    let strLower = str.toLowerCase(); //To not change the global variable, we copy the global variable in another variable
    let count = 0;
    for(let i = 0; i < strLower.length; i++){
        if("aeiou".includes(strLower[i])){
            count++;
        }
    }
    return count;
}

console.log(countVowel2());

