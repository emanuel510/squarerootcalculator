const innput = document.getElementById("innput");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
let operation = 0;

btn.addEventListener("click", () => {
    operation = Number(innput.value);
    operation = Math.sqrt(innput.value).toFixed(3);
    result.textContent = `Result: ${operation}`;

    if(innput.value < 0){
        result.textContent = `Result: There is not a square root of a negative number`;
    }
    if(innput.value == ""){
        result.textContent = `Result: Enter a number!`;
    }
});




















