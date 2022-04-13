// Evento para nuevo usuario

document.getElementById("formulario").addEventListener("submit", crear)

// funcion crear

function crear(e){
    nombre = document.getElementById("nombre").value
    edad = document.getElementById("edad").value
    puesto = document.getElementById("puesto").value
    sueldo = document.getElementById("sueldo").value

    let usuario = {
        nombre,
        edad,
        puesto,
        sueldo
    }

    //local storage

    if(localStorage.getItem("Usuarios")=== null){
        
        let usuarios= []
        usuarios.push(usuario)
        localStorage.setItem("Usuarios", JSON.stringify(usuarios))
    }else{
        let usuarios = JSON.parse(localStorage.getItem("Usuarios"))
        usuarios.push(usuario)
        localStorage.setItem("Usuarios", JSON.stringify(usuarios))
    }

    //funcion leer
    leer();
    document.getElementById("usuario").reset();
    console.log("usuario guardado correctamente")
    e.preventDefault()
}

// funcion leer

function leer(){
    let usuarios = JSON.parse(localStorage.getItem("Usuarios"));
    document.getElementById("tbody").innerHTML=""
    for(let i= 0; i< usuarios.length; i++){
        let nombre = usuarios[i].nombre
        let edad = usuarios[i].edad
        let puesto = usuarios[i].puesto
        let sueldo = usuarios[i].sueldo
        document.getElementById ("tbody").innerHTML +=
        `
        <tr>
        <td>${nombre}</td>
        <td>${puesto}</td>
        <td>${edad}</td>
        <td>${sueldo}</td>
        <td><button onclick="editar('${nombre}')" class="btn btn-success">Editar</button>
        <td><button onclick="eliminar('${nombre}')" class="btn btn-danger">Eliminar</button>
    </tr>
        `

    }
}
// invocar a la funcion leer con: leer()

function editar(nombre){
let usuarios = JSON.parse(localStorage.getItem("Usuarios"));
for(let i = 0; i < usuarios.length; i++) {
    if(usuarios[i].nombre === nombre){
        document.getElementById("body").innerHTML = 
        
        `
        <form id="formulario">
        <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                <label for="exampleInputEmail1">Nombre completo</label>
                <input type="text" class="form-control" id="newnombre" aria-describedby="emailHelp" placeholder="${usuarios[i].nombre}">
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">Edad</label>
                <input type="number" class="form-control" id="newedad" aria-describedby="emailHelp" placeholder="${usuarios[i].edad}">
              </div>
            </div>

              
            <div class="col-md-6">
                <div class="form-group">
                <label for="exampleInputEmail1">Puesto</label>
                <input type="text" class="form-control" id="newpuesto" aria-describedby="emailHelp" placeholder="${usuarios[i].puesto}">
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">Sueldo</label>
                <input type="number" class="form-control" id="newsueldo" aria-describedby="emailHelp" placeholder="${usuarios[i].sueldo}">
              </div>
            </div>
        </div>
        </div>
        <button class="btn btn-success" onclick="actualizar('${i}')">Actualizar</button>
   
      </form>
<div class="card shadow mb-4">

</div>
</div>
</div>
</div>

</div>
`
  }
  
  } 

}

// funcion actualizar


function actualizar(i){
    let usuarios= JSON.parse(localStorage.getItem("Usuarios"));
    usuarios[i].nombre = document.getElementById("newnombre").value;
    usuarios[i].edad = document.getElementById("newedad").value;
    usuarios[i].puesto = document.getElementById("newpuesto").value;
    usuarios[i].sueldo = document.getElementById("newsueldo").value;

    localStorage.setItem("Usuarios", JSON.stringify(usuarios));
    vistaPrincipal()
}

// función eliminar

function eliminar(nombre){
    let usuarios = JSON.parse(localStorage.getItem("Usuarios"));
    for(let i=0; i<usuarios.length; i++){
        if(usuarios[i].nombre === nombre){
            usuarios.splice(i,1)
        }
    }
    localStorage.setItem("Usuarios",JSON.stringify(usuarios))
    leer();
}

function vistaPrincipal(){
    document.getElementById("body").innerHTML=
    ` 
    <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid" id="body">

                    <!-- Page Heading -->
                  
                    

                                <form id="formulario">
                                <div class="container">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                        <label for="exampleInputEmail1">Nombre completo</label>
                                        <input type="text" class="form-control" id="nombre" aria-describedby="emailHelp" placeholder="Ingresa nombre">
                                      </div>

                                      <div class="form-group">
                                        <label for="exampleInputEmail1">Edad</label>
                                        <input type="number" class="form-control" id="edad" aria-describedby="emailHelp" placeholder="Ingresa edad">
                                      </div>
                                    </div>

                                      
                                    <div class="col-md-6">
                                        <div class="form-group">
                                        <label for="exampleInputEmail1">Puesto</label>
                                        <input type="text" class="form-control" id="puesto" aria-describedby="emailHelp" placeholder="Ingresa el puesto">
                                      </div>

                                      <div class="form-group">
                                        <label for="exampleInputEmail1">Sueldo</label>
                                        <input type="number" class="form-control" id="sueldo" aria-describedby="emailHelp" placeholder="Ingresa el sueldo">
                                      </div>
                                    </div>
                                </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Agregar</button>
                           
                              </form>
                            


                            
                       
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Puesto</th>
                                            <th>edad</th>
                                            <th>Sueldo</th>
                                            <th>Editar</th>
                                            <th>Eliminar</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbody">
                                        <tr>
                                            <td>Tiger Nixon</td>
                                            <td>Desarrollador</td>
                                            <td>30</td>
                                            <td>$50,000</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                </div>
                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->
    
    `
    leer();
}

leer();







