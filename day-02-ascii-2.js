// Program to remove vowel from a string

let str = "Today is Day Two of my Javascript practice!";

function removeVowels(){
    let strLower = str.toLowerCase();
    let result = '';
    for(let i = 0; i < strLower.length; i++){
        if(!('aeiou'.includes(strLower[i]))){
            result += strLower[i];  
        }
    }
    console.log(result);
    
}

removeVowels();