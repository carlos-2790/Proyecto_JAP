//LE PASO EL "ID" DE DROP DOWN DEL USUARIO A IMPRIMIR
const imprimir = document.getElementById('usuario_nombre');

// LE PASO EL "ID" DEL LABEL PARA IMPRIMIR EL NOMBRE DE USUARIO
var usuComent = document.getElementById("usua");

//TRAIGO EL NOMBRE DE USUARIO EN LA VARIABLE "usuario" DEL LOCALSTORAGE
var usu =localStorage.getItem('usuario');

//IMPRIMO EL NOMBRE DE USUARIO 
imprimir.innerHTML=usu;

//IMPRIMO EL USUARIO EN EL LABEL DEL COMENTARIO
usuComent=`<label for="text" id="usua">`+usu+`</label>`;
