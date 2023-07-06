// Validador de CPF
// https://www.geradorcpf.com/algoritmo_do_cpf.htm

// apresentation
console.log('Validador de CPF');

const cpf = '140.561.109-05';
const cpfLimpo = cpf.replace(/\D+/g, '');
const cpfArray = Array.from(cpfLimpo);
let message = '';
const cpfArrayNumbers = cpfArray.map((el) => {
    return parseInt(el);
});

const createDigit = (cpf) => {
    let x = cpf.length + 2;
    const sumCpf = cpf.reduce((ac, el) => {
        x--;
        return ac + (el * x);
    }, 0);
    (sumCpf % 11 < 2) ? cpf.push(0): cpf.push(11 - (sumCpf % 11));
    return cpf;
}

const check_lenght = (cpf) => {
    message = 'o cpf deve conter 11 digitos';
    return cpf.length == 11;
}

const isSequence = (cpf) => {
    message = 'o cpf não pode ser uma sequência';
    return cpf == cpf[0].repeat(cpf.length);
}

const check_digits = (cpf) => {
    let cpf_d1 = createDigit(cpf.slice(0, 9));
    let cpf_d2 = createDigit(cpf_d1);
    message = cpf_d2.join('') === cpfLimpo ? 'cpf válido' : 'cpf inválido';
    return cpf_d2.join('') === cpfLimpo;
};

const cpfValido = (cpf, cpfLimpo) => {
    if(check_lenght(cpf) != true) return false;
    if(isSequence(cpfLimpo)) return false;
    return check_digits(cpf, cpfLimpo)
}

if (cpfValido(cpfArrayNumbers, cpfLimpo)){
    console.log(`\n${cpf}\n\n${message}`);
} else {
    console.log(`\n${cpf}\n\n${message}`);
}

// 47 98823-2040

// rua conselheiro art 650 bairro america, transversal da rua mas colin