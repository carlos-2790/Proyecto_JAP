
let articulos = {};
let articulos2 = {};
let precioUnit = 0;
let precioUnit2 = 0;
var num = 0;
var num2 = 0;
let impSubtotal = 0;
let impSub2 = 0;

let subT = 0;
var subT2 = 0;
var porcentajeEnvio = 0.15;





function eliminarPino() {

    document.getElementById("fila1").remove();
    subT = 0;
    actualizarCostos();


}

function eliminarAuto() {

    document.getElementById("fila2").remove();
    subT2 = 0;
    actualizarCostos();

}


function actualizarCostos() {

    let subText = document.getElementById("subtotalText");
    let envText = document.getElementById("envioText");
    let totalText = document.getElementById("totalCostText");

    //calculo el precio unitario del pino
    var t1 = (subT * 100);
    
    //calculo el precio unitario de autos y lo paso a pesos 
    var t2 = (subT2 * 12500 * 40);
    var t = (t2 + t1);

    let subtextHTML = t;
    let costoEnvioHTML = Math.round(porcentajeEnvio * t);
    let totalEnvioHTML = Math.round(t + costoEnvioHTML);

    subText.innerHTML = subtextHTML;
    envText.innerHTML = costoEnvioHTML;
    totalText.innerHTML = totalEnvioHTML;
}



//funcion que se ejecuta cuando se hace click en el boton aceptar y valida los campos 
function btnAceptar() {

    var entrar = false;
    let calleValidar = document.getElementById("invalid-calle");
    let numeroValidar = document.getElementById("invalid-numero");
    let esquinaValidar = document.getElementById("invalid-esquina");
    let calleHTML = document.getElementById("validationCalle");
    let esquinaHTML = document.getElementById("validationEsquina");
    let numeroHTML = document.getElementById("validationNumero");
    let tarjetaHTML = document.getElementById("idTarjeta");
    let vencimientoHTML = document.getElementById("idVencimiento");
    let codigoDeSegHTMML = document.getElementById("idCodSeg");
    let errorModalHTML = document.getElementById("errorModal");

    if (calleHTML.value == null || calleHTML.value == "") {
        calleValidar.innerHTML = 'Debe ingresar la calle';
        entrar = true;
    } else {
        document.getElementById("invalid-calle").innerHTML = '';
    }
    if (numeroHTML.value == null || numeroHTML.value == '') {
        numeroValidar.innerHTML = 'Debe ingresar el numero';
        entrar = true;
    } else {
        document.getElementById("invalid-numero").innerHTML = '';
    }
    if (esquinaHTML.value == null || esquinaHTML.value == "") {
        esquinaValidar.innerHTML = 'Debe ingresar la esquina';
        entrar = true;
    } else {
        document.getElementById("invalid-esquina").innerHTML = '';

    }
    if (tarjetaHTML.value == null || tarjetaHTML.value == "") {
        entrar = true;
        tarjetaHTML.style.borderColor = "red";
    } else {

        tarjetaHTML.style.borderColor = "green";
    }
    if (vencimientoHTML.value == null || vencimientoHTML.value == "") {
        entrar = true;
        vencimientoHTML.style.borderColor = "red";
    } else {

        vencimientoHTML.style.borderColor = "green";
    }
    if (codigoDeSegHTMML.value == null || codigoDeSegHTMML.value == "") {
        entrar = true;
        codigoDeSegHTMML.style.borderColor = "red";
    } else {

        codigoDeSegHTMML.style.borderColor = "green";
    }
    if (entrar) {
        errorModalHTML.innerHTML = 'Faltan campos por rellenar '
    } else {
        errorModalHTML.innerHTML = '<span style="color:green"> Datos Cargados exitosamente! </span> ';

        document.getElementById("alert").innerHTML = '<div class="alert alert-success" role="alert"> <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
            ' <path fill-rule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3' +
            ' 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>' +
            ' </svg>    Compra exitosa!  <button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
            ' <span aria-hidden="true">&times;</span> </button></div>';
    }

}

// funcion que reinicia los campos
function btnLimpiarCampos() {

    document.getElementById("invalid-esquina").innerHTML = "";
    document.getElementById("invalid-calle").innerHTML = "";
    document.getElementById("invalid-numero").innerHTML = "";
    document.getElementById("validationCalle").value = "";
    document.getElementById("validationNumero").value = "";
    document.getElementById("validationEsquina").value = "";
    document.getElementById("subtotalText").innerHTML = 0;
    document.getElementById("envioText").innerHTML = 0;
    document.getElementById("totalCostText").innerHTML = 0;
    document.getElementById("idTarjeta").value = "";
    document.getElementById("idTarjeta").style.borderColor = "red";
    document.getElementById("idVencimiento").value = ""
    document.getElementById("idVencimiento").style.borderColor = "red";
    document.getElementById("idCodSeg").value = "";
    document.getElementById("idCodSeg").style.borderColor = "red";
    document.getElementById("errorModal").innerHTML = "";
    document.getElementById("alert").innerHTML = "";



}

document.addEventListener("DOMContentLoaded", function (e) {


    //funcion que trae el numero del input(cantidad de pinos), se lo paso a una variable  e imprimo en otro id el monto.
    document.getElementById("numero").addEventListener("change", function () {
        num = document.getElementById("numero").value;

        impSubtotal = document.getElementById("subTotal");
        impSubtotal.innerHTML = `UYU ` + num * 100;
        subT = 100 * num;
        subT = this.value

        actualizarCostos();

    });

    //funcion que trae el numero del input(cantidad de autos), se lo paso a una variable  e imprimo en otro id el monto.
    document.getElementById("numero2").addEventListener("change", function () {
        num2 = document.getElementById("numero2").value;

        impSub2 = document.getElementById("subTotal2");
        impSub2.innerHTML = `UYU ` + (40 * 12500) * num2;
        subT2 = (Math.round(12500 * 40) * impSub2);

        subT2 = this.value;
        actualizarCostos();

    });

    document.getElementById("premiumradio").addEventListener("change", function () {
        porcentajeEnvio = 0.15;
        actualizarCostos()
    });

    document.getElementById("expressradio").addEventListener("change", function () {
        porcentajeEnvio = 0.07;
        actualizarCostos()
    });

    document.getElementById("standardradio").addEventListener("change", function () {
        porcentajeEnvio = 0.05;
        actualizarCostos()
    });

});


// imprimo los datos del json en las tablas html
document.addEventListener("DOMContentLoaded", function (ex) {
    getJSONData(ARTICLES_CART).then(function (res) {
        if (res.status === "ok") {
            art = res.data;

            articulos = document.getElementById("art");
            articulos2 = document.getElementById("art2");
            precioUnit = document.getElementById("costoUnit");
            precioUnit2 = document.getElementById("costoUnit2");
            num = document.getElementById("numero");
            num2 = document.getElementById("numero2");

            for (let i = 0; i < art.articles.length; i++) {
                articulos.innerHTML = art.articles[0].name;
                precioUnit.innerHTML = art.articles[0].currency + ` ` + art.articles[0].unitCost;
                num.value = art.articles[0].count;

                if (art.articles[i]) {

                    articulos2.innerHTML = art.articles[i].name;
                    precioUnit2.innerHTML = art.articles[i].currency + ` ` + art.articles[i].unitCost;
                    num2.value = art.articles[i].count;
                }
            }

        }


    })
});