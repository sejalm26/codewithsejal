let form = document.getElementById("form");
let text = document.getElementById("text");
let result = document.getElementById("result")

form.addEventListener("submit", function(e){
    e.preventDefault();

    let value = text.value;
    let count = value.split(" ").filter(w => w !== "").length;
    result.innerText = count;
})

text.addEventListener("input", function(e){
    let liveCount = text.value.split(" ").filter(w => w !== "").length;
    result.innerText = liveCount;
})