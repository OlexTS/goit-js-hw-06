let counterValue = 0;
const valueRef = document.querySelector('#value');
const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnIncrementRef = document.querySelector('[data-action="increment"]');


const onClickDecr = () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
}

function onClickIncr() {
    counterValue += 1;
    valueRef.textContent = counterValue;
}
btnDecrementRef.addEventListener('click', onClickDecr);
btnIncrementRef.addEventListener('click', onClickIncr);
