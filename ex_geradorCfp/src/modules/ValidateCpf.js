export default class ValidateCpf {
    constructor(cpf) {
        this.cpf = cpf;
        Object.defineProperty(this, 'clean_cpf', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: cpf.replace(/\D+/g, '')
        });
    }

    isSequence(){
        return this.clean_cpf.charAt(0).repeat(11) === this.clean_cpf;
    }

    static createDigit(cpf_no_digits) {
        const cpfArray = Array.from(cpf_no_digits);
        let regressivo = cpfArray.length + 1;
        const total = cpfArray.reduce((ac, val) => {
            ac += (regressivo * Number(val));
            regressivo--;
            return ac;
        }, 0);
        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }

    newCpf() {
        const cpf_no_digits = this.clean_cpf.slice(0, -2);
        const digito1 = ValidateCpf.createDigit(cpf_no_digits);
        const digito2 = ValidateCpf.createDigit(cpf_no_digits + digito1);
        return cpf_no_digits + digito1 + digito2;
    }

    validCpf() {
        let erro = false;
        erro = (this.clean_cpf) ? false : erro;
        erro = (typeof this.clean_cpf !== 'string') ? true : erro;
        erro = (this.clean_cpf.length !== 11) ? true : erro;
        erro = (this.isSequence()) ? true : erro;
        if(erro){
            return console.log(this.clean_cpf, 'CPF inválido');
        } else {
            if ((this.newCpf() == this.clean_cpf)) {
                console.log(this.clean_cpf, 'CPF válido');
            } else {
                console.log(this.clean_cpf, 'CPF inválido');
            }
        }
    }
}