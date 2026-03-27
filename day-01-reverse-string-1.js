let str = 'hello world';

function reverseString(){
    let result = '';
    for(let i = str.length-1; i >=0; i--){
        result += str[i];
    }
    result = result.split(" ").reverse().join(" ");
    return result;
}

console.log(reverseString());
