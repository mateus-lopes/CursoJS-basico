class Carro {
    constructor(marca, velocidade, modelo, cor, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
        this.velocidade = velocidade;
    }
    acelerar() {
        if(this.velocidade > 100) return;
        this.velocidade += 10;
        console.log(`A velocidade atual é ${this.velocidade}`);
    }
    desacelerar() {
        if(this.velocidade >= 0) return;
        this.velocidade -= 10;
        console.log(`A velocidade atual é ${this.velocidade}`);
    }
    get velocidadeAtual() {
        return this.velocidade;
    }
}

class Caminhonete extends Carro {
    constructor(marca, velocidade, modelo, cor, ano, capacidade) {
        super(marca, velocidade, modelo, cor, ano);
        this.capacidade = capacidade;
    }
}

const car1 = new Carro('Carrito', 0, 'Uno', 'Vermelho', 2010);
car1.acelerar();
console.log(car1);
console.log(car1.velocidadeAtual);

const car2 = new Caminhonete('Caminhoneta', 0, 'Ford', 'Vermelho', 2011, 1000);
car2.acelerar();
console.log(car2);
console.log(car2.velocidadeAtual);