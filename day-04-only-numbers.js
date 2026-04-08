let num = '01040abc918133001';

function onlyNumber(){
    for(let i = 0; i < num.length; i++){
        let ch = num[i];
        if(ch < '0' || ch > '9'){
            return false   
        }
    }
    return true
    
}

console.log(onlyNumber());
