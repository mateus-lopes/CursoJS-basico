import PasswordLength from './modules/PasswordLength';
import GeneratePassword from './modules/GeneratePassword';
import './assets/css/style.css';

(function() {
    const passwordLength = new PasswordLength();
    const generatePassword = new GeneratePassword();
    passwordLength.init();
    generatePassword.init();
})();