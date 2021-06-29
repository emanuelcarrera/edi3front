addEventListener("load", load)
//var servidor = "http://localhost:777";
var servidor = "https://edi3carreraback.herokuapp.com";

    var xmlhttp = new XMLHttpRequest();
   
    xmlhttp.open("GET", servidor + '/Usuarios/Listar');
    xmlhttp.onload = function () {
        //Veo si llego la respuesta del servidor

            //Reviso si la respuesta es correcta
            if (xmlhttp.status == 200) {
                
                
                var json = JSON.parse(xmlhttp.responseText);
                var template = ``;
                json.map(function(Usuarios){
                     template +=`
                     
                     <h2>${Usuarios.nombreUsuario}</h2>
                     <br>
                     <strong>${Usuarios.nombre}</strong>
                     <strong>${Usuarios.apellido}</strong>
                     <p>${Usuarios.Descripcion}</p>

                     `;

                });
                xmlhttp.send();
                console.log(template);
                document.getElementById('lista').innerHTML=template;


            }
            else {
                alert("ocurrio un error");
            }
        
    }





function $(valor) {
    return document.getElementById(valor);
}


function load() {
    
    //enviarMensajeAlServidor(servidor , cargarOpcionesProvincia); EnviarUsuario
   //$("btnEnviar").addEventListener("click",Login);
   $("btnListar").addEventListener("click",ListarUsuarios);

    
}


function ListarUsuarios(){

    var xmlhttp = new XMLHttpRequest();
   
    xmlhttp.open("GET", servidor + '/Usuarios/Listar', true);
    xmlhttp.onreadystatechange = function () {
        //Veo si llego la respuesta del servidor
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            //Reviso si la respuesta es correcta
            if (xmlhttp.status == 200) {
                xmlhttp.send();
                var json = JSON.parse(xmlhttp.responseText);
                var template = ``;
                json.map(function(Usuarios){
                     template +=`
                     
                     <h2>${Usuarios.nombreUsuario}</h2>
                     <br>
                     <strong>${Usuarios.nombre}</strong>
                     <strong>${Usuarios.apellido}</strong>
                     <p>${Usuarios.Descripcion}</p>

                     `;

                });
                
                console.log(template);
                document.getElementById('lista').innerHTML=template;


            }
            else {
                alert("ocurrio un error");
            }
        }
    }



}