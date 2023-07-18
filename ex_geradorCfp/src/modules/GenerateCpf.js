import ValidateCpf from './ValidateCpf.js';

export default class GenerateCpf {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formatCpf(cpf){
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        );
    }

    newCpf(){
        const cpfSemDigito = this.rand();
        const digito1 = ValidateCpf.createDigit(cpfSemDigito);
        const digito2 = ValidateCpf.createDigit(cpfSemDigito + digito1);
        const novoCpf = cpfSemDigito + digito1 + digito2;
        return this.formatCpf(novoCpf);
    }
}