class ValidForm {
    constructor(form) {
        this.form = document.getElementById(form);
        this.firstName = document.getElementById('first-name');
        this.lastName = document.getElementById('last-name');
        this.email = document.getElementById('email');
        this.cpf = document.getElementById('cpf');
        this.password = document.getElementById('password');
        this.repeatPassword = document.getElementById('password-confirm');
        this.erro = [];
        this.eventListener()
    }

    eventListener() {
        this.form.addEventListener('submit', e => {
            this.handleSubimit(e);
        });
    }
    
    handleSubimit(e) {
        e.preventDefault();
        if(this.verifyErrors() == true) {
            alert('Formulário enviado');
            this.form.submit();
        }
    }

    verifyErrors() {
        this.removeError()
        if(this.validFirstName()) return false;
        if(this.validLastName()) return false;
        if(this.validEmail()) return false;
        if(this.validCpf()) return false;
        if(this.validPasswords()) return false;
        return true;
    }

    defaultValidations(input) {
        switch (true) {
            case input.value === '':
                this.displayError(input, 'Campo obrigatório');
                return true;
            case input.value.length <= 3:
                this.displayError(input, 'O campo precisa ter pelo menos 3 caracteres');
                return true;
            case input.value.length > 12:
                this.displayError(input, 'O campo não pode ter mais de 12 caracteres');
                return true;
            default:
                return false;
        }
    } 

    validFirstName() {
        if(this.defaultValidations(this.firstName)){
            return false;
        } else {
            if (!this.firstName.value.match(/^[a-zA-Z]+$/)){
                this.displayError(this.firstName, 'Campo inválido');
                return true;
            }
        }
    }

    validLastName() {
        if(this.defaultValidations(this.lastName)){
            return false;
        } else {
            if (!this.lastName.value.match(/^[a-zA-Z]+$/)){
                this.displayError(this.lastName, 'Campo inválido');
                return true;
            }
        }
    }

    validEmail() {
        switch (true) {
            case this.email.value === '':
                this.displayError(this.email, 'Campo obrigatório');
                return true;
            case !this.email.value.match(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/):
                this.displayError(this.email, 'Email inválido');
                return true;
            default:
                return false;
        }
    }

    validCpf() {
        const cpf = new ValidaCPF(this.cpf.value);
        switch (true) {
            case this.cpf.value === '':
                this.displayError(this.cpf, 'Campo obrigatório');
                return true;
            case !this.cpf.value.match(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/):
                this.displayError(this.cpf, 'O cpf deve ter o formato 000.000.000-00');
                return true;
            case !cpf.valida():
                this.displayError(this.cpf, 'CPF inválido');
                return true;
            default:
                return false;
        }
    }

    validPasswords() {
        if(this.password.value !== this.repeatPassword.value){
            this.displayError(this.repeatPassword, 'As senhas não são iguais');
            return true;
        }else {
            this.validPassword(this.password);
            this.validPassword(this.repeatPassword);
        }
    }

    validPassword(input) {
        switch (true) {
            case input.value === '':
                this.displayError(input, 'Campo obrigatório');
                return true;
            case input.value.length <= 6:
                this.displayError(input, 'O campo precisa ter pelo menos 6 caracteres');
                return true;
            case input.value.length > 20:
                this.displayError(input, 'O campo não pode ter mais de 20 caracteres');
                return true;
            case input.value.typeof == 'string':
                this.displayError(input, 'O campo precisa ter pelo menos 1 número');
                return true;
            case input.value.typeof == 'number':
                this.displayError(input, 'O campo precisa ter pelo menos 1 letra');
                return true;
            default:
                return false;
        }
    }

    displayError(input, msg) {
        this.erro.push(input);
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        input.insertAdjacentElement('afterend', div);
    }


    removeError() {
        this.erro.forEach((input, index) => {
            input.parentNode.removeChild(input.nextElementSibling);
            delete this.erro[index]
        });
    }
}

const validForm = new ValidForm('createAccount');