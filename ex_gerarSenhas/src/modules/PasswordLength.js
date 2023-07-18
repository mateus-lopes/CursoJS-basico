export default class PasswordLength {
    constructor() {
        this.btnRange = document.querySelector('#range');
    }
    init() {
        this.btnRange.addEventListener('click', () => {
            document.querySelector('.range-value').innerHTML = this.btnRange.value;
        });
        
        return this.btnRange.value;
    }
} 

