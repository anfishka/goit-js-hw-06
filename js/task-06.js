////TODO
let validInput = document.querySelector('#validation-input');
let dataLength = parseInt(validInput.getAttribute('data-length'));

validInput.addEventListener("blur", () => {
    let textLength = validInput.value.length;
    if(dataLength === textLength) {
        validInput.classList.remove('invalid'); 
        validInput.classList.add('valid');
    }else{
    validInput.classList.remove('valid');
    validInput.classList.add('invalid');

    console.log(textLength);
    console.log(dataLength);
    
}
})
