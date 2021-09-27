// alert('que onda turro de la calle');
       console.log('puto de mierda aguerrido');
       var nombre_variable;
       let otra_variable = "Hola";
       const pi = 3.1416;
       let num = 15;
       let num2 = 18;
       let hayClases = true;
       let terminoLaClase = false;
       console.log(pi*num2);
       console.log(num2 + 36 + " " + otra_variable)
       if(otra_variable == "Hola" && hayClases != false){
           console.log('vamos a la videollamada');
       } else{
           console.log('nos la re tomamos ñeri');
       }
       if(hayClases == false || terminoLaClase == false){
           console.log('reeee picuso');
       } else{
           console.log('malardovich');
       }

       let elemento = document.getElementById("principal");
       //    console.log(elemento);
       elemento.innerHTML ="buenas tardes"
       elemento.innerHTML += "<p text-right bg-warning>" + otra_variable + "</p>"
       document.write("<h3 class= 'text-center bg-primary'>Santi chiquito</h3>");

       if(nombre_variable == undefined){
           elemento.innerHTML += "estamos de parranda"
           elemento.innerHTML += "<p>Ema</p>"
           elemento.innerHTML += "<p>Natha</p>"
           elemento.innerHTML += "<p>Mata</p>"
           elemento.innerHTML += "<p>Santi</p>"
        //    elemento.style.background = "Black"
        //    elemento.style.color = "white"
       }

    //    let mensaje = prompt('introdice tu mensaje');  
    //    elemento.innerHTML += "<h3>" + mensaje + "</h3>";
    //    elemento.innerHTML += "<div class=\"alert alert-success\" role=\"alert\">"+ mensaje +"</div>"

    // let menu = prompt('Comete alguna de estas, y esta \n 1. Tu vieja \n 2. Tu hermana \n 3. Tu suerga');


    // if(menu == 1){
    //     elemento.innerHTML += "<div class=\"alert alert-success\" role=\"alert\">Sos un asco hermano</div>"
    // } else if(menu == 2){
    //     elemento.innerHTML += "<div class=\"alert alert-success\" role=\"alert\">Bueno no está mal</div>"
    // } else if(menu == 3){
    //     elemento.innerHTML += "<div class=\"alert alert-success\" role=\"alert\">Sos un asco man</div>"
    // } else {
    //     alert('elegi uno down');
    //     let menu = prompt('Comete alguna de estas, y esta \n 1. Tu vieja \n 2. Tu hermana \n 3. Tu suerga');
    // }

    // switch (menu){
    //     case 1 :
    //         elemento.innerHTML += "<div class=\"alert alert-success\" role=\"alert\">Sos un asco hermano</div>"
    //         break;
    //     default:
    //         elemento.innerHTML += "<div class=\"alert alert-success\" role=\"alert\">'elegi uno down'</div>"
    //         break;
    // }

    // let num3 = Number(prompt(' ingresa el primer numero'));
    // let num4 = Number(prompt(' ingresa el segundo numero'));

    // let resultado = "El resultado de la suma de "+ num3 +" y "+ num4 +" es: " + (num3 + num4);

    let arreglo = ["emin", "natha", "santi", "mata", "fede" ,"asa", "yoe"];

    for(let b = 0; b < arreglo.length; b++){
        elemento.innerHTML += `
      <div class="card" style="width: 18rem;">
        <img src="" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${arreglo[b]}</h5>
            <p class="card-text"</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>
    `;
    }

arreglo.push("dupla");
arreglo[8]= "Juan"

    arreglo.forEach((b,index)=>{
        elemento.innerHTML += `
      <div class="card" style="width: 18rem;">
        <img src="" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${index + 1}${b}</h5>
            <p class="card-text"</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>`
    });
