/* Variables a ocupar por el formulario registrarse */

var usuario = document.getElementById("usuario");
var contraseña = document.getElementById("password")
var confirmar = document.getElementById("confirmar")

/*constantes, para ocupar en la validacion del fromulario*/
const form = document.getElementById("form");
const listInputs =document.querySelectorAll(".form-input");

/* al formulario completo agregamos un evento, con esto evitamos el envio y reseteo del formulario*/
form.addEventListener("submit", (e) => {
    e.preventDefault();
    validar();

})

//Validar

function validar(){

    listInputs.forEach((Element) => {
        Element.lastElementChild.innerHTML = "";
        
    });

    let todoOk = true;

    if(usuario.value.length > 40 || usuario.value.length < 3 || usuario.value.trim() == ""){
        mostrarMensajeError("usuario", "El nombre de usuario debe tener 3 o 40 caracteres")
        todoOk = false;
    }

    if(contraseña.value.length > 20 || contraseña.value.length < 5 || contraseña.value.trim() == ""){
        mostrarMensajeError("password", "La contrasenia debe tener 5 o 20 caracteres")
        todoOk = false;
    }else if(contraseña.value !== confirmar.value){
        mostrarMensajeError("confirmar", "Las contraseñas deben ser las mismas")
        todoOk = false;
    }

    if(todoOk){
        alert("¡Todos los campos están correctos!");

        localStorage.setItem("usuario", usuario.value);
        localStorage.setItem("password", contraseña.value);

        form.reset(); // Limpia todos los campos del formulario
        window.location.href = "login.html"
    }

}

/* funcion que muestra el mensaje de error en las validaciones */
function mostrarMensajeError(ClaseInput, mensaje){

        let elemeto = document.querySelector(`.${ClaseInput}`);
        elemeto.lastElementChild.innerHTML = mensaje;
        
   }