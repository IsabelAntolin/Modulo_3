class Auto {
   constructor(marca_auto, modelo_auto, año_fabricacion_auto, cantidad_puertas_auto) {
      this.marca = marca_auto;
      this.modelo = modelo_auto;
      this.añoFabricacion = año_fabricacion_auto;
      this.cantidadPuertas = cantidad_puertas_auto;
   }
   //Metodos
   acelerar() {
      console.log(`Acelerando a......`);
   }
   subirVidrios() {
      console.log(`Subiendo vidrios ...`);
   }
}

class AutoGas extends Auto {
   //Metodos
   acelerar() {
      console.log(`Acelerando a Gas`);
   }
}
class AutoNafta extends Auto {
   acelerar() {
      console.log(`Acelerando a Nafta`);
   }
}
class AutoElectricos extends Auto {
   acelerar() {
      console.log(`Acelerando a Electricidad`);
   }
}


const auto1 = new AutoGas('Toyota', 'Rav 4', 2022, 5);
const auto2 = new AutoNafta('Toyota', 'Rav 4', 2022, 5);
const auto3 = new AutoElectricos('Toyota', 'Rav 4', 2022, 5);
auto1.acelerar();
auto2.acelerar();
auto3.acelerar();


