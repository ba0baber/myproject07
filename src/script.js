const form = document.getElementById('ContactForm');
const emailInnput = document.getElementById('e-mail');

emailInnput .addEventListener('input', validateEmail);

function validateEmail(){
    const emailRegex = /[A-Za-z0-9_-\.]{2,10}@[a-z0-9\.-_]{1,10}\.[a-z]{2,3}/;
    if (emailRegex.test(emailInnput.value))
    {
        removeError(emailInnput);
        return true;

    }
    else
    {
        showError(emailInnput, "Email не соответсвует формату. Пример: ivanov@mail.ru");
        return false;
    }
}

function showError(inpput, message){
    const formControl = input.parentElement;
    const errorElement = formControl.querySelector('.error') || document.createElement('div');

    errorElement.class ='error';
    errorElement.textContent = message;
    
    formControl.appendChils(errorElement);
    input.style.borderColor = 'red';
            
        
    
    
}

function removeError(input){
    const formControl = input.parentElement;
    const errorElement = formControl.querySelector('.error');

    if(errorElement)
    {
        formControl.removeChild(errorElement);

    }
    input.style.borderColor = 'green';
}