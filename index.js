let inp = [];

function add(x, y){
    return Math.round((x + y) * 100) / 100;
}

function subtract(x, y){
    return Math.round((x - y) * 100) / 100;
}

function multiply(x, y){
    return Math.round((x * y) * 100) / 100;
}

function divide(x, y){
    return Math.round((x / y) * 100) / 100;
}

function calculate(n1, op, n2){
    if(op == "*"){
        return multiply(n1, n2);
    } else if(op == "+"){
        return add(n1, n2);
    } else if(op == "-"){
        return subtract(n1, n2);
    } else {
        return divide(n1, n2);
    }
}

function fullCalculation(){
    if(inp[inp.length - 1].type == "number" && inp.length > 2){
        let n1 = inp[0].val;
        let op;
        let n2;
        calcLoop:
            for(let i = 1; i < inp.length; i++){
                if (i % 2 == 0){
                    n2 = inp[i].val; 
                    if (op == "/" && n2 == 0){
                        alert("stop that.");
                        break calcLoop;
                    } else{
                        n1 = calculate(n1, op, n2);
                    }
                } else {
                    op = inp[i].val;
                }
            }
        inp = [];
        inp.push(makeButton(n1, "number"));
    }
    updateDisplay();
}

function updateDisplay(){
    displayElement = document.querySelector(".display");
    displayContent = "";
    for (i in inp){
        displayContent += inp[i].val + " ";
    }
    displayElement.textContent = displayContent;
}

function clearDisplay(){
    inp = [];
    displayElement = document.querySelector(".display");
    displayElement.textContent = "";
}

function makeButton(val, type){
    return {
        val,
        type,
    };
}

function numInput(btn){
    if (inp.length == 0){
        inp.push(makeButton(btn, "number"));
    } else {
        if (inp[inp.length - 1].type == "operation"){
            inp.push(makeButton(btn, "number"));
        } else {
            inp[inp.length -1].val = +(inp[inp.length -1].val + "" + btn)
        }
    }
    updateDisplay();
}

function operationInput(btn){
    if (inp[inp.length - 1].type == "number"){
        inp.push(makeButton(btn, "operation"));
    }
    updateDisplay();
}