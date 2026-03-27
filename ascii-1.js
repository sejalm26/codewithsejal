// let ch = '2';

// if(ch >= 'a' && ch <= 'z'){
//     console.log("letter");
// }
// console.log(false);

let str = 'sejal';

function secretName(){
    // let code = ch.charCodeAt(0);
    let result = '';

    for(let i = 0; i < str.length; i++){
        let ch = str[i];
        let code = ch.charCodeAt(0);
        code++;
        // console.log(code);
        let newChar = String.fromCharCode(code);
        
        console.log(newChar);
        
        result += newChar;

    }
    // return result;
    console.log(result);
    

    
}

secretName();
