

const ORDER_ASC = "ASC";
const ORDER_DESC ="DES";
const ORDER_BY_PROD = "Relevancia.";
var currentProductArray = [];
var currentSortCriteria = undefined;
var minCost = undefined;
var maxCost = undefined;




function sortProduct(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC)
    {
        result = array.sort(function(a1, b2) {
             let a = parseInt(a1.cost);
             let b = parseInt(b2.cost);

            if ( a < b ){ return -1; }
            if ( a > b ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC){
        result = array.sort(function(a1, b2) {
             let a = parseInt(a1.cost);
             let b = parseInt(b2.cost)

            if ( a > b ){ return -1; }
            if ( a < b ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD){
        result = array.sort(function(a, b) {
            let aCost = parseInt(a.soldCount);
            let bCost = parseInt(b.soldCount);

            if ( aCost > bCost ){ return -1; }
            if ( aCost < bCost ){ return 1; }
            return 0;
        });
    }

  return result;
   
}

function showProductList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentProductArray.length; i++){
        let product = currentProductArray[i];
       
        if (((minCost == undefined) || (minCost != undefined && parseInt(product.cost) >= minCost)) &&
            ((maxCost == undefined) || (maxCost != undefined && parseInt(product.cost) <= maxCost))){
                
            htmlContentToAppend += `
            <a href="product-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ product.name +`</h4>
                            <small class="text-muted">` + product.soldCount + ` artículos</small>
                        </div>
                        <p class="mb-1">` + product.description + `</p>
                        <br>
                        <h4 class="mb-1">`+ product.currency + ` `+product.cost +`</h4>
                    </div>
                </div>
            </a>
            `
        }

        document.getElementById("listados").innerHTML = htmlContentToAppend;
    }
}




function sortAndShowProduct(sortCriteria, productArray){
    currentSortCriteria = sortCriteria;

    if(productArray != undefined){
        currentProductArray = productArray;
    }

    currentProductArray = sortProduct(currentSortCriteria, currentProductArray);
    
    //Muestro las categorías ordenadas
    showProductList();
}


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            sortAndShowProduct(ORDER_ASC, resultObj.data);
          
        }
    });
    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowProduct(ORDER_ASC);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowProduct(ORDER_DESC);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        sortAndShowProduct(ORDER_BY_PROD);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCost = undefined;
        maxCost = undefined;

        showProductList();
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCost = document.getElementById("rangeFilterCountMin").value;
        maxCost = document.getElementById("rangeFilterCountMax").value;

        if ((minCost != undefined) && (minCost != "") && (parseInt(minCost)) >= 0){
            minCost = parseInt(minCost);
        }
        else{
            minCost = undefined;
        }

        if ((maxCost != undefined) && (maxCost != "") && (parseInt(maxCost)) >= 0){
            maxCost = parseInt(maxCost);
        }
        else{
            maxCost = undefined;
        }

        showProductList();
    });
});









































    