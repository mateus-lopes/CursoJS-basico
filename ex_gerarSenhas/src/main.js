import './assets/css/style.css';

(function() {
    const btnRange = document.querySelector('#range');
    const rangeValue = document.querySelector('.range-value');
    btnRange.addEventListener('click', () => {
        rangeValue.innerHTML = btnRange.value;
    });
})();