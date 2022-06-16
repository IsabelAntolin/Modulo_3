function setPropsOnObj(obj) {
  obj.p = 5;
  obj['plataforma'] = 5
  obj['proximo'] = function (num) {
    num = num + 1
    return num
  }
  obj.la = {
    clave: {
      secreta: {
        es: 404
      }
    }
  }
}

function setPropsOnArr(array) {
  array.hola = function () {
    return 'Hola!'
  }
  array['river'] = 'plate';
  array[0] = 5;

  array.doble = function (num) {
    num = num * 2;
    return num
  }
}

function functionObject() {
  functionObject()
}

function setPropsOnFunc(fun) {
  fun.year = '2017';
  fun.mitad = function (num) {
    num = num/2;
    return num
  };
}
  // fun.prototype.helloWorld()= 'Hello World';
  








