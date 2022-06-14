const chiste = document.querySelector('h2');
const boton = document.querySelector('.btn_actualizar');

function cargarFrase() {
   $.getJSON('https://api.chucknorris.io/jokes/random', function (datos) {
      console.log(datos);
      chiste.textContent = datos.value;
   });
}

cargarFrase();

boton.addEventListener('click', function () {
   cargarFrase();
});