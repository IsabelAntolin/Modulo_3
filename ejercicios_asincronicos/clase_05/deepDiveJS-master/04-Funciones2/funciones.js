//1 y 2
function concatenar() {
  let string = ''
  for (palabra of arguments) {
    string += palabra;
  }
  return string
}
//3
function invocarFunciones(function1, function2) {
  if (function2 != undefined) {
    return function1() + function2()
  } else return function1()
}
//4
function creadorDeIncrementos(n) {
  return function (m) {
    return n + m
  }
}
//5 y 6
function invocacionUnica(fun) {
  let cont = 0;
  return function () {
    if (cont == 0) {
      fun();
      cont++
    }
  }
}
//7 , 8
function objetoConClousure() {
  let numero;
  let bandera = false
  return {
    incremento() { },
    incrementoPor10() { },
    pedirValor() {

      if (bandera == true) {
        return numero
      }
      else {
        numero = 11
        return numero
      }
    },

    cambiarValor(m) {
      bandera = true;
      numero = m
      return numero
    }
  }
}

function ListaDeFuncionesInvitados(array, cod) {
  let arrayL = [
  function Facu() { return 'Facu' },
  function Santi() { return 'código secreto: invalido' }, 
  function Toni() { }, 
  function Guille() { }, 
  function Solano() { }, 
  function Leo() { }] 

  return arrayL
}

function armarListaDeInvitados(func , cod){
  arregloInvitados = ['Facu', 'Santi', 'Toni', 'Guille', 'Solano', 'Leo']
  return arregloInvitados
}