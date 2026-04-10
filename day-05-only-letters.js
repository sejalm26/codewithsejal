let str = 'Sejal'

function onlyLetters(){

    for(let i = 0; i < str.length; i++){
        let ch = str[i];
        if(!((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))){
            return false;
        }
    }
    console.log(str, str.length);
    return true;
}

console.log(onlyLetters());
