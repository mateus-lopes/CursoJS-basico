import GenerateCpf from './modules/GenerateCpf';
import GenerateColor from './modules/GenerateColor';

import './assets/css/style.css';

(function() {
    document.addEventListener('click', (event) => {
        const element = event.target;
        if (!element.classList.contains('output-cpf')) {
            const cpfGerado = document.querySelector('.output-cpf');
            const body = document.querySelector('body');
            const color = new GenerateColor();
            const generateCpf = new GenerateCpf();
            body.style.backgroundColor = color.getNewColor();
            cpfGerado.innerHTML = generateCpf.newCpf();
        }
    });
    const generateCpf = new GenerateCpf();
    const cpfGerado = document.querySelector('.output-cpf');
    console.log(generateCpf.newCpf());
    cpfGerado.innerHTML = generateCpf.newCpf();
})();