
let articulos = {};
let articulos2 = {};
let precioUnit = 0;
let precioUnit2 = 0;
let num = 0;
let num2 = 0;



//funcion que trae el numero del input, se lo paso a una variable  e imprimo en otro id el monto.
document.getElementById("numero").addEventListener("click", function () {
    var num = document.getElementById("numero").value;
    document.getElementById("subTotal").innerHTML ='UYU ' +num * 100;
});
//funcion que trae el numero del input, se lo paso a una variable  e imprimo en otro id el monto.
document.getElementById("numero2").addEventListener("click", function () {
    var num2 = document.getElementById("numero2").value;

    document.getElementById("subTotal2").innerHTML ='UYU '+(40 * 12500) * num2;

});



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