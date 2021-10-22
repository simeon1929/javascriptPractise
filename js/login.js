const loginForm = document.querySelector('.login')
const username = document.getElementById('userName')
const password = document.getElementById('Password')
const submit = document.getElementById('submit')
const loginerror = document.querySelector('.error__bar')
const loginerror2 = document.querySelector('.error__bar2')
const errorBaar = document.querySelector('.errrorBar')


loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    if(username.value == password.value) {
        window.location = 'welcome.html'; 
    }
    // else if (username.value == password.value) { 
    //     loginerror2.classList.add('active')
    //     ///alert('empty') 
        
    // }
   
    
    else  {
        loginerror.classList.add('active') 
        setTimeout(() => {
            loginerror.classList.add('setTimeOut')
        }, 3000);
        
    }

    
    loginForm.reset()       
    
})

//set timeout function

