function appendValue(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculate() {
    let x = document.getElementById("result").value;
    
    try {
    
        if (x) {
            document.getElementById("result").value = eval(x);
        }
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}