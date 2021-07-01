addEventListener("load", load)
//var servidor = "http://localhost:777";
var servidor = "https://edi3carreraback.herokuapp.com";



function $(valor) {
    return document.getElementById(valor);
}


function load() {
    

   $("btnEnviarUsuario").addEventListener("click",AltaUsuario);

    
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

                
            }
            else {
                alert("ocurrio un error");
            }
        }
    }
     
    if($("txtNUsuario").value === null || $("txtNUsuario").value === "")
    {

        alert("Usuario Obligatorio");
    }
    if ($("txtPass").value === null || $("txtPass").value === "") {

        
        alert("contraseña Obligatoria");
    } 
    if ($("txtNombre").value === null || $("txtNombre").value === "") {

        alert("Nombre Obligatorio");
        
    } 
    if ($("txtApellido").value === null || $("txtApellido").value === "") {
        
        alert("Apellido Obligatorio");
    } 
    if ($("txtEdad").value === null || $("txtEdad").value === "") {
        alert("edad Obligatorio");
    } 
    if ($("txtUDescripcion").value === null || $("txtUDescripcion").value === "") {
        alert("Descripcion Obligatorio");
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
    alert("Usuario creado");

    $("txtNUsuario").value = "";
    $("txtPass").value = "";
    $("txtNombre").value = "";
    $("txtApellido").value = "";
    $("txtEdad").value = "";
    $("txtUDescripcion").value  ="";



    }



}

