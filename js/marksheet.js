const calForm = document.getElementById('marksheet');
const totalMarks = document.getElementById('totalMarks');
const Tgrade = document.querySelector('#Agrade');
const Egrade = document.querySelector('#Bgrade');
const Mgrade = document.querySelector('#Cgrade');
const Sgrade = document.querySelector('#Dgrade');
const SSgrade = document.querySelector('#Egrade');




calForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    //e.tamil.value 
    const tamil = calForm.tamil.value
    const eng = calForm.english.value
    const mat = calForm.matchs.value
    const sci = calForm.science.value
    const socSc = calForm.socScience.value
    let sum = parseInt(tamil) + parseInt(eng) +parseInt(mat)+ parseInt(sci) + parseInt(socSc)
    totalMarks.innerText = sum

    if(tamil>35) {
        Tgrade.innerText = "Pass" 
    }
    else 
        Tgrade.innerText = "Fail" 


    if(eng>35) 
        Egrade.innerText = "Pass" 
    else 
        Egrade.innerText = "Fail" 


    if(mat>35) 
        Mgrade.innerText = "Pass" 
    else 
        Mgrade.innerText = "Fail" 

    if(sci>35) 
        Sgrade.innerText = "Pass" 
    else 
        Sgrade.innerText = "Fail" 

    if(socSc > 35) 
        SSgrade.innerText = "Pass" 
    else 
        SSgrade.innerText = "Fail" ;
        
})