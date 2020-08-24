const imprimir = document.getElementById('usuario_nombre');

var usu =localStorage.getItem('usuario');

imprimir.innerHTML=usu;
