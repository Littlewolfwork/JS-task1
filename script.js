var btn = document.querySelector('#btn');
btn.addEventListener("click", function(){
    const firstNumber = parseFloat(document.querySelector("#firstNumber").value);
    const secondNumber = parseFloat(document.querySelector("#secondNumber").value);
    window.alert(firstNumber+secondNumber);

});

