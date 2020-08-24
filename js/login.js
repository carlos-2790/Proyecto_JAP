const  nombre  = document.getElementById("name");
const  pass    = document.getElementById("password");
const  form    = document.getElementById("form");
const  parrafo = document.getElementById("warnings");



form.addEventListener("submit",function (event) {
    
    event.preventDefault();
    let warnings="";
    parrafo.innerHTML="";
    let entrar= false;

    if (nombre.value == null || nombre.value == "") {
        warnings += `Debe ingresar el usuario <br>`;
        entrar=true;
    }
    if (pass.value== null || pass.value=="") {
            warnings += `Debe ingresar el password <br>`;
            entrar=true;
    }

    if(entrar){
        parrafo.innerHTML=warnings;
    }else{
        
        localStorage.setItem('usuario',JSON.stringify(nombre.value));
        window.location.href="menu.html"
    
    }
}); 

