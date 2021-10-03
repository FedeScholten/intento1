let elemento = document.getElementById ("principal");
let tiempo=0;
// console.log(elemento);
let usuario ={
    name: "Federico Scholten",
    edad: 19,  
    email: "fede.scholten@gmail.com",
    pass: "hola",
    validar:(e,p)=>{
        if(e === usuario.email && p === usuario.pass){
            return true
        }else{
            return false
        }
    }
};

window.addEventListener('load',function(){
    elemento.innerHTML = `
    <form class="col-6"> 
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password">
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button id="btn" type="button" class="btn btn-primary">Enviar</button>
    </form>
    `;
    document.getElementById("btn").addEventListener('click', ()=>{
        let email = document.getElementById("email").value
        let pass = document.getElementById("password").value
        console.log(email,pass);
        let entrar = usuario.validar(email, pass);
        console.log(entrar);
        if(entrar){
            elemento.innerHTML=`
            <h1> Sistema administrativo</h1>
            <p> Bienvenido ${usuario.name}</p>
            <p> Tu mail es ${usuario.email}</p>
            <p> Tenes ${usuario.edad} años</p>
        `;
        } else{
            elemento.innerHTML += `
            <div id="alerta" class="alert alert-danger text-center mt-4" role="alert">
                Usuario o contraseña incorrectas
            </div>`;
            this.location.reload();
            let tiempo = setInterval(()=>{
                elemento.innerHTML =`
                <form class="col-6"> 
                <div class="mb-3">
                  <label for="email" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" id="password">
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button id="btn" type="button" class="btn btn-primary">Enviar</button>
                </form>
                `;
                clearInterval(tiempo);
            },2000);
        }

    })
});
// let tiempo = setInterval(()=>{
//     document.getElementById("alerta").style.visibility="hidden"
//     clearInterval(tiempo);
// }, 4000);




