const loginForm = document.querySelector('.login')
const username = document.getElementById('userName')
const password = document.getElementById('Password')
const submit = document.getElementById('submit')
const loginerror = document.querySelector('.error__bar')
const loginerror2 = document.querySelector('.error__bar2')


loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    if (username.value == " " == password ==" ") { 
        loginerror2.classList.add('active')
        alert('empty') 
    }
    else if(username.value == password.value) {
        console.log('correct'); 
        window.location = 'welcome.html'; }
    else  {
        loginerror.classList.add('active') 
        alert('WRONG DATA')
    }

    
    loginForm.reset()       
    
})