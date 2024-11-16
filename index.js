/*
    PSEUDOCODE
    
    1) if input was filled incorrectly DO
    a) change input border color to tomato red and placeholder
    b) fill the innerText of the span with Valid email required

    2) if input was filled correctly DO
    3) on button click pop up success message
    
*/
// const btn = document.querySelector('#btn');
// //

// btn.addEventListener('click', function(){
//     messsage.classList.remove('hide')
// })
/*const newsLetter = document.querySelector('#newsLetter');
const successMessage = document.querySelector('#successMessage');
//const btn = document.querySelector('#btn');
const userEmail = document.querySelector('#userEmail');
const dismissBtn = document.querySelector('#dismissBtn');
const btn = document.querySelector('#btn');
const mail = document.querySelector('#mail');
const error = document.querySelector('#error');

function showErrorMessage(message){
    error.textContent = message;
}

function changeBorderColor(valid){
    mail.style.border = valid ? 'initial' : 'red';
}
function changeTextColor(valid){
    error.style.color = valid ? 'initial' : 'red';
}
function clearErrorMessages(){
    error.textContent = '';
}

let isValid = false;

mail.addEventListener('input', function(e){
    let email = e.target.value;
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    isValid = pattern.test(email);

    console.log(isValid);
    if(isValid){
        changeBorderColor(true); 
        changeTextColor(true); 
        clearErrorMessages()
    }else{ 
        changeBorderColor(false); 
        changeTextColor(false); 
        showErrorMessage('Valid email required')
    };
});

btn.addEventListener('click', ()=> {

    if(isValid){
        newsLetter.classList.add('valid');
        successMessage.classList.add('valid');
        successMessage.classList.remove('valid');
        changeBorderColor(true); 
        changeTextColor(true); 
        clearErrorMessages();

    }else{
        newsLetter.classList.remove('valid');
        successMessage.classList.remove('valid');
        successMessage.classList.add('valid');
    }

})*/

document.addEventListener('DOMContentLoaded', () => {
    const newsLetter = document.querySelector('#newsLetter');
    const successMessage = document.querySelector('#successMessage');
    const userEmail = document.querySelector('#userMail');
    const dismissBtn = document.querySelector('#dismissBtn');
    const button = document.querySelector('#btn');
    const mail = document.querySelector('.mail');
    //const placeHolder = document.querySelector('#mail').placeHolder;
    const error = document.querySelector('#errorMessage');

    let active = false;

    function showErrorMessages(Message) {
        error.textContent = Message;
    }

    function clearErrorMessages() {
        error.textContent = '';
    }

    /*mail.addEventListener('click', () => {
        if(active){

        userEmail.textContent = email; 

        changeBorderColor(true);
        changeTextColor(true);
        clearErrorMessages();

        }else{
            changeBorderColor(false);
            changeTextColor(false);
            showErrorMessages('Valid email required')
        }
    });*/


    function changeBorderColor(valid) {
        mail.style.borderColor = valid ? 'initial' : 'hsl(4, 100%, 67%)';
        if(valid){
            mail.classList.remove('invalid');
        }else{mail.classList.add('invalid');}
    
    }

    function changeTextColor(valid) {
        error.style.color = valid ? 'initial' : 'red';
    }

    button.addEventListener('click', (e) => {
        e.preventDefault();
        let email = mail.value;
        //const pattern = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', 'g');
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        active = pattern.test(email);

        if (active){
        userEmail.textContent = email; 
        newsLetter.classList.add('active');
        successMessage.classList.remove('active');
        changeBorderColor(true);
        changeTextColor(true);
        clearErrorMessages()

        }else{

        newsLetter.classList.remove('active');
        successMessage.classList.add('active');
        showErrorMessages('Valid email required')
        changeBorderColor(false);
        changeTextColor(false);

        }

    
    })

    dismissBtn.addEventListener('click', () => {

        if (active){
            
            newsLetter.classList.remove('active');
            successMessage.classList.add('active');
        }

    })

})