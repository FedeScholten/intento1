let elemento = document.getElementById("principal");
const suma=()=>{
    elemento.innerHTML+= 58 + 23;
};
suma();
const sumar =(a=0,b=0)=>{
    elemento.innerHTML+=`<p>${a + b}</p>`;
};
sumar();
sumar(5,89);
sumar(9,89);
sumar(5,9);
sumar(56);

function persona(nombre,apellido,edad,dni){
    this.edad=edad;
    this.apellido=apellido;
    this.nombre=nombre;
    this.dni=dni;
};

let Fede = new persona("Federico","Scholten","19","43872055",);
elemento.innerHTML+=`<p> Nombre: ${Fede.nombre} Apellido: ${Fede.apellido} Edad: ${Fede.edad} DNI: ${Fede.edad}</p>`
