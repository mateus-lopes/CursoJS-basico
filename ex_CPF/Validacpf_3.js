class ValidaCPF {
    constructor(cpfEnviado) {
        this.cpfEnviado = cpfEnviado;
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    éSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    static criaDigito(cpfParcial) {
        const cpfArray = Array.from(cpfParcial);
        let regressivo = cpfArray.length + 1;
        const total = cpfArray.reduce((ac, val) => {
            ac += (regressivo * Number(val));
            regressivo--;
            return ac;
        }, 0);
        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }

    geraNovoCpf() {
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.criaDigito(cpfParcial);
        const digito2 = ValidaCPF.criaDigito(cpfParcial + digito1);
        return cpfParcial + digito1 + digito2;
    }

    valida() {
        let erro = false;
        erro = (this.cpfLimpo) ? false : erro;
        erro = (typeof this.cpfLimpo !== 'string') ? true : erro;
        erro = (this.cpfLimpo.length !== 11) ? true : erro;
        erro = (this.éSequencia()) ? true : erro;
        if(erro){
            return console.log(this.cpfLimpo, 'CPF inválido');
        } else {
            if ((this.geraNovoCpf() == this.cpfLimpo)) {
                console.log(this.cpfLimpo, 'CPF válido');
            } else {
                console.log(this.cpfLimpo, 'CPF inválido');
            }
        }
    }
}

const validacpf = new ValidaCPF('111.444.777-35');
const validacpf2 = new ValidaCPF('111.444.777-359');
const validacpf3 = new ValidaCPF('999.999.999-99');
const validacpf4 = new ValidaCPF('140.561.109-01');
validacpf.valida();

validacpf2.valida();

validacpf3.valida();

validacpf4.valida();
