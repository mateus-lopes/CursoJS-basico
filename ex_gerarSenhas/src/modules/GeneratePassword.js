import PasswordLength from "./PasswordLength";

export default class GeneratePassword {
    constructor() {
        this.withNumber = document.querySelector('#withNumber');
        this.withSymbol = document.querySelector('#withSymbol');
        this.withUppercase = document.querySelector('#withUpper');
        this.withLowercase = document.querySelector('#withLower');
        this.btnGenerate = document.querySelector('#generate');
        this.password = document.querySelector('#password');
    }

    rand(min = 1, max = 9) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    init() {
        this.btnGenerate.addEventListener('click', () => {
            this.generate();
        });
    }

    generate() {
        const passwordLength = new PasswordLength();
        const length = passwordLength.init();
        const withNumber = this.withNumber.checked;
        const withSymbol = this.withSymbol.checked;
        const withUppercase = this.withUppercase.checked;
        const withLowercase = this.withLowercase.checked;
        this.password.innerHTML = this.createPassword(length, withNumber, withSymbol, withUppercase, withLowercase);
        console.log(this.password.innerHTML.length);
    }
    createPassword(length, withNumber, withSymbol, withUppercase, withLowercase) {
        if((withNumber || withSymbol || withUppercase || withLowercase) === false){
            this.password.classList.add('error');
            return 'Selecione pelo menos uma opção';
        } else {
            this.password.classList.remove('error');
            const newPassword = [];
            while(newPassword.length < length) {
                newPassword.push(this.generateChar(withNumber, withSymbol, withUppercase, withLowercase));
            }
            if(this.password.innerHTML.includes('<!--')) {
                this.createPassword(length, withNumber, withSymbol, withUppercase, withLowercase);
            }
            return `${newPassword.join('')}`
        }
    }
    
    generateChar(withNumber, withSymbol, withUppercase, withLowercase){
        const char = [];
        if (withNumber) char.push(this.generateNumber());
        if (withSymbol) char.push(this.generateSymbol());
        if (withUppercase) char.push(this.generateLetter());
        if (withLowercase) char.push(this.generateLetter().toLowerCase());
        return char[this.rand(0, char.length)];
    }
    generateNumber() {
        const numbers = '0123456789';
        return numbers[this.rand(0, numbers.length)];
    }
    generateSymbol() {
        const symbols = '!@#$%&*(){}[]=/.-+?,;:';
        return symbols[this.rand(0, symbols.length)];
    }
    generateLetter() {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return letters[this.rand(0, letters.length)];
    }
}