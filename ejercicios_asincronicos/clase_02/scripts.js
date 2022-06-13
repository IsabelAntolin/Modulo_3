function mostrarMensaje() {
   const fecha = new Date() //Devuelve dia u hora
   let diaSemana = fecha.getDay();
   let listaSemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'sábado', 'domingo'];
   mensaje = alert('Hoy es ' + listaSemana[diaSemana]);
   return mensaje;
}
mostrarMensaje();







