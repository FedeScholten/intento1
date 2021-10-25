let elemento = document.querySelector("#principal");

let mascotas = [];
// mascotas[1]="Loro"
// mascotas[0]="Gato" //La cuenta empieza con el 0*\
// mascotas.push("Gallo");  //lo pone al final*\

mascotas.forEach(m => {
    elemento.innerHTML+=`<h2>${m}</h2>`;
});    //Esto es para poner los elementos de ese arreglo uno abajo del otro*\
const agregarDatos=()=>{
    let datos = document.querySelectorAll("input");
    let consulta ="";
    if(datos[6].checked){
        consulta = "Consulta";
    } else{consulta="Urgencia"}
    let mascota = {
        propietario: datos[0].value,
        nombre: datos[1].value,
        raza: datos[2].value,
        masa: datos[3].value,
        edad: datos[4].value,
        imagen: datos[5].value,
        tipoConsulta: consulta
    }
    return mascota;
};
const agregarMascota=()=>{
    mascotas.push(agregarDatos());
    console.log(mascotas)
    mostrarmascotas();

};

// function crearForm(){}
const crearForm=()=>{
    elemento.innerHTML=`
    <form class="col-6">
        <div class="mb-3">
            <label for="propietario" class="form-label">Propietario</label>
            <input type="text" class="form-control" id="propietario">
        </div>
        <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="nombre">
        </div>
        <div class="mb-3">
            <label for="raza" class="form-label">Raza</label>
            <input type="text" class="form-control" id="raza">
        </div>
        <div class="mb-3">
            <label for="masa" class="form-label">Masa</label>
            <input type="text" class="form-control" id="masa">
        </div>
        <div class="mb-3">
            <label for="edad" class="form-label">Edad</label>
            <input type="text" class="form-control" id="edad">
        </div>
        <div class="mb-3">
            <label for="imagen" class="form-label">Imagen</label>
            <input type="text" class="form-control" id="imagen">
        </div>

        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
                Consulta
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
            <label class="form-check-label" for="flexRadioDefault2">
                Urgencia
            </label>
        </div>
        <button type="button" id="btn" class="btn btn-primary">Agregar datos</button>
    </form>
    `;
    document.getElementById("btn").addEventListener('click',agregarMascota);
};
crearForm();

const actualizarM=()=>{
    mascotas[a]=agregarDatos();
    mostrarmascotas();
};
const modificarM=(k)=>{
    let mascota = mascotas[k]
    // console.log(mascota)
    elemento.innerHTML=`
    <form class="col-6">
        <div class="mb-3">
            <label for="propietario" class="form-label">Propietario</label>
            <input type="text" class="form-control" id="propietario" value="${mascota.propietario}">
        </div>
        <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="nombre" value="${mascota.nombre}">
        </div>
        <div class="mb-3">
            <label for="raza" class="form-label">Raza</label>
            <input type="text" class="form-control" id="raza" value="${mascota.raza}">
        </div>
        <div class="mb-3">
            <label for="masa" class="form-label">Masa</label>
            <input type="text" class="form-control" id="masa" value="${mascota.masa}">
        </div>
        <div class="mb-3">
            <label for="edad" class="form-label">Edad</label>
            <input type="text" class="form-control" id="edad" value="${mascota.edad}">
        </div>
        <div class="mb-3">
            <label for="imagen" class="form-label">Imagen</label>
            <input type="text" class="form-control" id="imagen" value="${mascota.imagen}">
        </div>

        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
                Consulta
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
            <label class="form-check-label" for="flexRadioDefault2">
                Urgencia
            </label>
        </div>
        <button type="button" id="btn" onclick="actualizar(${k})" class="btn btn-primary">Modificar datos</button>
    </form>
    `;
};

const eliminarM=(z)=>{
    mascotas.splice(z,1);
    mostrarmascotas();
};

const mostrarmascotas =()=>{
    elemento.innerHTML = "";
        mascotas.forEach((a, index) => {
            elemento.innerHTML+=`
                <div class="col-12">
                    <div class="card" style="width: 18rem;">
                        <img src="${a.imagen}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${a.nombre}</h5>
                            <p class="card-text">Propietario: ${a.propietario}</p>
                            <p class="card-text">Raza: ${a.raza}</p>
                            <p class="card-text">Edad: ${a.edad}</p>
                            <p class="card-text">Masa: ${a.masa}</p>
                            <p class="card-text">Tipo de consulta: ${a.tipoConsulta}</p>
                            <a href="#" class="btn btn-primary" onclick="crearForm()">Agregar otra mascotovich</a>
                            <a href="#" class="btn btn-primary" onclick="modificarM(${index})">Modificar</a>
                            <a href="#" class="btn btn-primary" onclick="eliminarM()">Eliminar</a>
                        </div>
                    </div>
            </div>`; 
    });
};

let numeros = [78,35,29];
console.log(numeros.indexOf(35));
numeros[numeros.indexOf(35)]=99;
numeros[1]=99;
console.log(numeros.length)
console.log(numeros)
numeros.splice(1,1);
console.log(numeros)
console.log(numeros.length)

