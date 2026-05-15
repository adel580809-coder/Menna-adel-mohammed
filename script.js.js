function appendValue(value) {
    // اتأكد دايماً إن مفيش مسافة بين الـ + والـ =
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculate() {
    // بنجيب النص اللي مكتوب في الخانة
    let x = document.getElementById("result").value;
    
    try {
        // بنستخدم eval للحساب، وحطيناها جوه try..catch 
        // عشان لو اليوزر كتب معادلة غلط (مثلاً 5++5) البرنامج ميبوظش
        if (x) {
            document.getElementById("result").value = eval(x);
        }
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}