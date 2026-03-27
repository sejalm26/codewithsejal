let str = 'sejal';

function secretNameOne(){
    let result = '';

    for(let i = 0; i < str.length; i++){
        let ch = str[i];
        let code = ch.charCodeAt(0);
        code++;
        let newChar = String.fromCharCode(code);        
        result += newChar;
    }
    console.log("Method 1: ", str, result);    
}

secretNameOne();

function secretNameTwo(){
    let result = '';

    for(let i = 0; i < str.length; i++){
        let ch = str[i];
        let newChar = String.fromCharCode(ch.charCodeAt(0) + 1);

        result += newChar;   
    }
    console.log("Method 2: ", str, result);      
}

secretNameTwo();
