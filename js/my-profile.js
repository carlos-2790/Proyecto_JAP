// id de los input donde se ingresan los datos
let primerNombre = document.getElementById("validationPrimerNombre");
let segundoNombre = document.getElementById("validationSegundoNombre");
let primerApellido = document.getElementById("validationPrimApellido");
let segundoApellido = document.getElementById("validationSegApellido");
let email = document.getElementById("validationEmail");
let telefono = document.getElementById("validationTelefono");
let edad = document.getElementById("validationEdad");
let imgID = document.getElementById("imagenP");
const urlImg = '<a href="https://imgbb.com/"><img src="https://i.ibb.co/Hn7zRwz/551515.jpg" alt="551515" border="0"></a>';
 

// id de los div que muestran error
let priNombreError = document.getElementById("valid-primerNombre");
let segNombreError = document.getElementById("valid-segundoNombre");
let priApellidoError = document.getElementById("valid-apellidoUno");
let segApellidoError = document.getElementById("valid-apellidoDos");
let emailError = document.getElementById("validation-email");
let telefonoError = document.getElementById("validation-telefono");
let edadError = document.getElementById("valid-edad");
var espacios = /\s/;
var validarEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


 
var fotoID = document.getElementById("imagenP");
var fotoURL = '<a href="https://ibb.co/1swb1JB"><img src="https://i.ibb.co/1swb1JB/rese-a-assassin-s-creed-unity.jpg" alt="rese-a-assassin-s-creed-unity" border="0"></a>';
localStorage.setItem('imagenP', fotoURL);
fotoID.innerHTML = localStorage.getItem('imagenP');



//#region Eventos

// eventos que se ejecutan cuando se ingresan datos al input
document.addEventListener("DOMContentLoaded", function (e) {

// evento que carga todo los datos que esten en localstorage una vez lanzado la pag
    window.addEventListener('load', function () {

       
       
        primerNombre.value = localStorage.getItem('nombreUno');
        segundoNombre.value = localStorage.getItem('nombreDos');
        primerApellido.value = localStorage.getItem('apellidoUno');
        segundoApellido.value = localStorage.getItem('apellidoDos');
        email.value = localStorage.getItem('Email');
        telefono.value = localStorage.getItem('Telefono');
        edad.value = localStorage.getItem('Edad');

    })


    primerNombre.addEventListener("blur", function (e) {

        if (espacios.test(primerNombre.value) || primerNombre.value == null || primerNombre.value == "") {
            primerNombre.style.borderColor = "red";

            priNombreError.innerHTML = '<span style =" color : red "><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
                '<path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>' +
                '</svg> No puede estar vacio  o empezar con espacios! </span > ';
        } else {

            priNombreError.innerHTML = '<span style="color:green"> <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
                '<path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>' +
                '<path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>' +
                ' </svg> Dato cargado !</span > ';
            primerNombre.style.borderColor = "green";
            localStorage.setItem('nombreUno', (primerNombre.value));
        }
    });

    segundoNombre.addEventListener("blur", function (e) {

        if (espacios.test(segundoNombre.value) || segundoNombre.value == null || segundoNombre.value == "") {

            segundoNombre.style.borderColor = "red";

            segNombreError.innerHTML = '<span style =" color : red "><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
                '<path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>' +
                '</svg> No puede estar vacio  o empezar con espacios! </span > ';

        } else {

            segNombreError.innerHTML = '<span style="color:green"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
                '<path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>' +
                '<path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>' +
                ' </svg>  Dato cargado !</span>';
            segundoNombre.style.borderColor = "green";
            localStorage.setItem('nombreDos', (segundoNombre.value));
        }
    });

    primerApellido.addEventListener("blur", function (e) {

        if (espacios.test(primerApellido.value) || primerApellido.value == null || primerApellido.value == "") {
            primerApellido.style.borderColor = "red";

            priApellidoError.innerHTML = '<span style =" color : red "> <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
                '<path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>' +
                '</svg>No puede estar vacio  o empezar con espacios! </span > ';
        } else {

            priApellidoError.innerHTML = '<span style="color:green"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
                '<path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>' +
                '<path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>' +
                ' </svg>  Dato cargado !</span>';
            primerApellido.style.borderColor = "green";
            localStorage.setItem("apellidoUno", (primerApellido.value));
        }
    });

    segundoApellido.addEventListener("blur", function (e) {

        if (espacios.test(segundoApellido.value) || segundoApellido.value == null || segundoApellido.value == "") {
            segundoApellido.style.borderColor = "red";

            segApellidoError.innerHTML = '<span style =" color : red "><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
                '<path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>' +
                '</svg> No puede estar vacio  o empezar con espacios! </span > ';
        } else {

            segApellidoError.innerHTML = '<span style="color:green"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
                '<path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>' +
                '<path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>' +
                ' </svg>  Dato cargado !</span>';
            segundoApellido.style.borderColor = "green";
            localStorage.setItem("apellidoDos", (segundoApellido.value));
        }
    });

    email.addEventListener("blur", function (e) {

        if (!validarEmail.test(email.value)) {
            email.style.borderColor = "red";
            emailError.innerHTML = '<span style =" color : red "><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
                '<path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>' +
                '</svg> Error al ingresar el email ! </span > ';
        }
        else {
            emailError.innerHTML = '<span style="color:green"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
                '<path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>' +
                '<path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>' +
                ' </svg>  Dato cargado !</span>';
            email.style.borderColor = "green";
            localStorage.setItem("Email", (email.value));
        }
    });

    telefono.addEventListener("blur", function (e) {

        if (telefono.value == null || telefono.value == "") {
            telefono.style.borderColor = "red";

            telefonoError.innerHTML = '<span style =" color : red "> <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
                '<path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>' +
                '</svg> Telefono no ingresado! </span > ';
        }
        else {
            telefonoError.innerHTML = '<span style="color:green"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
                '<path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>' +
                '<path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>' +
                ' </svg>  Dato cargado !</span>';

            telefono.style.borderColor = "green";
            localStorage.setItem('Telefono', (telefono.value));
        }
    });

    edad.addEventListener("blur", function (e) {

        if (edad.value == null || edad.value == "") {
            edad.style.borderColor = "red";

            edadError.innerHTML = '<span style =" color : red "> <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
                '<path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>' +
                '</svg> Edad no ingresada! </span > ';
        }
        else {
            edadError.innerHTML = '<span style="color:green"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
                '<path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>' +
                '<path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>' +
                ' </svg>  Dato cargado !</span>';

            edad.style.borderColor = "green";
            localStorage.setItem('Edad', (edad.value));
        }
    });

   

});
//#endregion