var btn = document.querySelector('#btn');
btn.addEventListener("click", function(){
    // TODO: добавить проверку введенных значений
    const firstNumber = parseFloat(document.querySelector("#firstNumber").value);
    const secondNumber = parseFloat(document.querySelector("#secondNumber").value);
    let result = firstNumber+secondNumber;
    window.alert( +result.toFixed(15));
});

