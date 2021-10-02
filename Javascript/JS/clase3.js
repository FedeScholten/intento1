function calcular(){

    let num = Number(prompt("ingrese el primer numero"));
    let num2 = Number(prompt("ingrese el segundo numero"));
    let op = prompt("Elija el tipo de operación: \n + Para sumar \n - Para restar \n * Para multiplicar \n / Para dividir")
    let elemento = document.getElementById("principal");
    if(op == "+"){
        let resultado = num + num2;
    elemento.innerHTML = "<p> El resultado de la suma de " +num+ " y "+num2+ " es: " +resultado+ "</p>";
    } else if(op == "-"){
        let resultado = num - num2;
    elemento.innerHTML = "<p> El resultado de la resta de " +num+ " y "+num2+ " es: " +resultado+ "</p>";
    } else if(op == "*"){
        let resultado = num * num2;
    elemento.innerHTML = "<p> El resultado de la multiplicación de " +num+ " y "+num2+ " es: " +resultado+ "</p>";
    } else if(op == "/"){
        let resultado = num / num2;
    elemento.innerHTML = "<p> El resultado de la división de " +num+ " y "+num2+ " es: " +resultado+ "</p>";
    }else {
        alert('elegi uno de esos pelotudo');
        let num = Number(prompt("ingrese el primer numero"));
        let num2 = Number(prompt("ingrese el segundo numero"));
        let op = prompt("Elija el tipo de operación: \n + Para sumar \n - Para restar \n * Para multiplicar \n / Para dividir")
    }
    
}