function mostrarMensaje() {
   //  const fecha = new Date() //Devuelve dia u hora
   let diaSemana = (new Date()).getDay();
   let listaSemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'sábado', 'domingo'];
   mensaje = alert('Hoy es ' + listaSemana[diaSemana]);
   return mensaje;
}
mostrarMensaje();







