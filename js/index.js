addEventListener("load", load)
//var servidor = "http://localhost:777";
var servidor = "https://edi3carreraback.herokuapp.com";



function $(valor) {
    return document.getElementById(valor);
}


function load() {
    
    //enviarMensajeAlServidor(servidor , cargarOpcionesProvincia); EnviarUsuario
   $("btnEnviar").addEventListener("click",Login);
   //$("btnEnviarUsuario").addEventListener("click",AltaUsuario);

    
}

function AltaUsuario(){

    var xmlhttp = new XMLHttpRequest();
   
    xmlhttp.open("POST", servidor + '/Usuarios/Alta', true);
    xmlhttp.onreadystatechange = function () {
        //Veo si llego la respuesta del servidor
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            //Reviso si la respuesta es correcta
            if (xmlhttp.status == 200) {
                //alert(xmlhttp.responseText);

                alert("ok");
            }
            else {
                alert("ocurrio un error");
            }
        }
    }
     
    if($("txtNUsuario").value === null || $("txtNUsuario").value === "")
    {

        alert("El campo nombre usuario esta vacio")

    }
    else{

    var obje = new FormData();
    obje.append("NUsuario", $("txtNUsuario").value );
    obje.append("pass", $("txtPass").value );
    obje.append("Nombre", $("txtNombre").value );
    obje.append("Apellido", $("txtApellido").value );
    obje.append("Edad", $("txtEdad").value );
    obje.append("Descripcion", $("txtUDescripcion").value );
    //envio el mensaje    
    xmlhttp.send(obje);
    }



}

function Login(){

    var xmlhttp = new XMLHttpRequest();
   
    xmlhttp.open("POST", servidor + '/Usuarios/Login', true);
    xmlhttp.onreadystatechange = function () {
        //Veo si llego la respuesta del servidor
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            //Reviso si la respuesta es correcta
            if (xmlhttp.status == 200) {
                alert(xmlhttp.responseText);

                //alert("ok");
            }
            else {
                alert("ocurrio un error");
            }
        }
    }

    var obje = new FormData();
    obje.append("pass", $("txtPass").value );
    //envio el mensaje    
    xmlhttp.send(obje);



}