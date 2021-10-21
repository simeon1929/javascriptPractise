const loginForm = document.querySelector('.login')
const username = document.getElementById('userName')
const password = document.getElementById('Password')
const submit = document.getElementById('submit')


loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    

    if(username.value == password.value) {
        console.log('correct'); 
        window.location = 'welcome.html'; }
    else 
        console.log('please enter correct name');  
    
})