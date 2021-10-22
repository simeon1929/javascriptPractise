const calForm = document.getElementById('marksheet');
const totalMarks = document.getElementById('totalMarks');
const grade = document.querySelectorAll('.one');




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

    grade.forEach((element) => {
      let x= element.innerText = " text please "

      console.log(x);
   });  
    // if(tamil > 35) 
    //     grade.innerText = 'Pass'
    // else 
    //     grade.innerText = 'fail'

    
    
})