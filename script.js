var btn = document.querySelector('#btn');
btn.addEventListener("click", function(){
    const firstNumber = parseFloat(document.querySelector("#firstNumber").value);
    const secondNumber = parseFloat(document.querySelector("#secondNumber").value);
    if (!(isFinite(firstNumber) && isFinite(secondNumber))){
        window.alert("Введено некорректное значение!");
        return;
    }
    let result = firstNumber+secondNumber;
    window.alert( +result.toFixed(15));
});

