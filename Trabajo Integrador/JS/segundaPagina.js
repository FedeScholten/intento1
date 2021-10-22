let elemento = document.querySelector("#alerta");

document.getElementById("resumen").addEventListener('click',()=>{
    let cantidad = document.getElementById("cantidad").value;
    let precio = 200;
    let resultado = cantidad * precio;
    let categoria = document.getElementById("cate").value;
    if(categoria == "Estudiante"){
        elemento.innerHTML=`<div class="alert alert-success" role="alert">Total a Pagar: $ ${resultado*0.2}</div>`;
    } else if(categoria == "Trainee"){
        elemento.innerHTML=`<div class="alert alert-success" role="alert">Total a Pagar: $ ${resultado*0.5}</div>`;
    } else{
        elemento.innerHTML=`<div class="alert alert-success" role="alert">Total a Pagar: $ ${resultado*0.85}</div>`;
    }

})