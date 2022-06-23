class CalculadoraNPI {
  constructor() {
    this.num1 = undefined
    this.num2 = undefined
    this.num3 = undefined
    this.valorInterno = 0
    this.bandera = false;
  }

  agregar(num) {
    if (this.num1 == undefined) {
      this.num1 = num
    }
    else if (this.num2 == undefined) {
      this.num2 = num
    } else {
      this.num3 = num
    }
  }

  sumar() {
    if (this.num1 == undefined || this.num2 == undefined) {
      throw 'La calculadoraNPI necesita por lo menos 2 números'
    }

    if (this.num3 == undefined) {
      this.valorInterno = this.num2 + this.num1
    }
    else {
      if (this.valorInterno == 0) {
        this.valorInterno = this.num3 + this.num2
      }
      else if (this.bandera = true) {
        this.valorInterno = this.valorInterno + this.num1
      }
      else {
        this.valorInterno = this.num3 + this.num2 + this.num1
      }
    }
  }

  restar() {
    if (this.num1 == undefined || this.num2 == undefined) {
      throw 'La calculadoraNPI necesita por lo menos 2 números'
    }
    if (this.num3 == undefined) {
      this.valorInterno = this.num1 - this.num2
    }
    else {
      if (this.valorInterno == 0) {
        this.valorInterno = this.num2 - this.num3
        this.bandera = true;
      }
    }
  }

  dividir() {
    if (this.num1 == undefined || this.num2 == undefined) {
      throw 'La calculadoraNPI necesita por lo menos 2 números'
    }
    this.valorInterno = this.num2 / this.num3

  }
  multiplicar() {
    if (this.num1 == undefined || this.num2 == undefined) {
      throw 'La calculadoraNPI necesita por lo menos 2 números'
    }
    this.valorInterno = this.valorInterno * this.num1
  }

  valor() {
    return this.valorInterno
  }
}