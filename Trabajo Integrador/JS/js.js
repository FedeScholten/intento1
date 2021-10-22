let elemento = document.querySelector("#aca");

const otraPagina=()=>{
    elemento.innerHTML=`
    <div class="p-5">
        <div class="container-fluid fixed-top">
            <div class="row">
                <nav class="navbar navbar-light bg-dark justify-content-between">
                    <div class="col-4">
                        <span class="float-left m-5">
                            <a class="navbar-brand text-light" href="#">
                                Conf Bs As
                            </a>
                        </span>
                    </div>
                    <div class="col">
                        <span class="float-right">
                            <ul class="nav">
                                <li class="nav-item mt-1"><a class="nav-link text-white-50"  href="#">La conferencia</a></li>
                                <li class="nav-item mt-1"><a class="nav-link text-white-50" href="#">Los oradores</a></li>
                                <li class="nav-item mt-1"><a class="nav-link text-white-50" href="#">El lugar y la fecha</a></li>
                                <li class="nav-item mt-1"><a class="nav-link text-light" href="#">Conviértete en orador</a></li>
                                <li class="nav-item mt-1"><a class="nav-link text-success" href="#">Comprar tickets</a></li>
                            </ul>
                        </span>
                    </div>
                </nav>
            </div>
        </div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-4">
                    <div class="card border-primary" style="width:105%">
                    <div class="card-body">
                      <h2 class="card-title text-center">Estudiante</h2>
                      &nbsp;
                      <h4 class="card-text text-center">Tiene un descuento</h4>
                      &nbsp;
                      <h4 class="card-text text-center"><b>80%</b></h4>
                      &nbsp;
                      <p class="card-text text-center text-secondary">* presentar documentación</p>
                    </div>
                </div></div>
                <div class="col-4">
                    <div class="card border-success" style="width:105%">
                        <div class="card-body">
                            <h2 class="card-title text-center">Trainee</h2>
                            &nbsp;
                            <h4 class="card-text text-center">Tiene un descuento</h4>
                            &nbsp;
                            <h4 class="card-text text-center"><b>50%</b></h4>
                            &nbsp;
                            <p class="card-text text-center text-secondary">* presentar documentación</p>
                        </div>
                </div></div>
                <div class="col-4">
                    <div class="card border-warning" style="width:105%">
                        <div class="card-body">
                            <h2 class="card-title text-center">Junior</h2>
                            &nbsp;
                            <h4 class="card-text text-center">Tiene un descuento</h4>
                            &nbsp;
                            <h4 class="card-text text-center"><b>15%</b></h4>
                            &nbsp;
                            <p class="card-text text-center text-secondary">* presentar documentación</p>
                        </div>
                </div></div>
            </div>
        </div>
        <p class="text-center mt-3">VENTA</p>
        <h1 class="text-center"><b>VALOR DE TICKET $200</b></h1>
        <div class="col-6">
            <form class="row g-3">
                <div class="col-6">
                  <label for="inputEmail4" class="form-label"></label>
                  <input type="email" class="form-control" id="inputEmail4" placeholder="Nombre">
                </div>
                <div class="col-6">
                    <label for="inputEmail4" class="form-label"></label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Apellido"> 
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label"></label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="Correo">
                </div>
                <div class="col-6">
                  <label for="inputAddress2" class="form-label">Cantidad</label>
                  <input type="text" class="form-control" id="inputAddress2" placeholder="cantidad">
                </div>
                <div class="col-6">
                  <label for="inputState" class="form-label">Categoría</label>
                  <select id="inputState" class="form-select">
                    <option selected>Estudiante</option>
                    <option>Trainee</option>
                    <option>Junior</option>
                  </select>
                </div>
                <div class="d-grid col-6">
                  <button type="submit" class="btn btn-success">Borrar</button>
                </div>
                <div class="d-grid col-6">
                    <button type="submit" class="btn btn-success">Resumen</button>
                  </div>
            </form>
        </div>
    </div>
    <div class="container-fluid p-4" id="ultimo">
        <div class="row">
            <div>
                <ul class="nav">
                        <div class="text-center col-2"><li class="nav-item mt-1"><a class="nav-link text-white"  href="#">Preguntas</a><div class="text-white">frecuentes</div></li></div>
                        <div class="text-center col-2"><li class="nav-item mt-1"><a class="nav-link text-white" href="#">Contáctanos</a></li></div>
                        <div class="text-center col-1"><li class="nav-item mt-1"><a class="nav-link text-white" href="#">Prensa</a></li></div>
                        <div class="text-center col-1"><li class="nav-item mt-1"><a class="nav-link text-white" href="#">Conferencias</a></li></div>
                        <div class="text-center col-2"><li class="nav-item mt-1"><a class="nav-link text-white" href="#">Terminos y</a><div class="text-white">condiciones</div></li></div>
                        <div class="text-center col-2"><li class="nav-item mt-1"><a class="nav-link text-white" href="#">Privacidad</a></li></div>
                        <div class="text-center col-2"><li class="nav-item mt-1"><a class="nav-link text-white" href="#">Estudiantes</a></li></div>
                </ul>
            </div>
        </div>
    </div>
    `
}




const ticket=()=>{
    document.getElementById("btn").addEventListener('click',otraPagina);
}
ticket();

const comprar=()=>{
    document.getElementById("ola").addEventListener('click',otraPagina);
}
comprar();







