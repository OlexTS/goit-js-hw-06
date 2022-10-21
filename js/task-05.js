const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');


const onInputChange = event => {
    console.log(event)
    
    event.currentTarget.value === '' ? spanRef.textContent = 'Anonymous' : spanRef.textContent = event.currentTarget.value;

    
}

inputRef.addEventListener('input', onInputChange)
