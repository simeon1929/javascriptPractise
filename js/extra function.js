

// event bubbling 

// event delagation 

// event function 
// ForEach

// let a  = arr.forEach( (item) =>{
//     return item
    
// })
// // ForEach Doesnt return any value


// let b = arr.map( (item) =>{
//     return item * 2
    
// })

// let c = arr.filter( (item) =>{
//     return item > 2
    
// })

// let d = arr.find( (item) =>{
//     return item > 2
    
// })

let data = [
    {name:"Simeon",age:20},
    {name:"joe",age:120},
    {name:"pravin",age:201},
];

let res = data.reduce((acc, add, idx)=>{
    return acc + add.age
})

// let res = data.map( age )

// let res = data.map(item => {
//     if(item.age > 20) {
//         return item
//     }
// })

// let res = data.filter(val => {
//     if(val.age >= 120) {
//         return val
//     }
// })

// let res = data.arr(val => {
//     if(val == "Simeon") {
//         return val
//     }
// })

// let res = data.find((val,inx) => {
//     console.log(inx);
//   return val.name == "joe"
// })


// let res = arr.find(item => item == 5)
let arr =[10,2,4,5,1,3,4];

// let res = arr.reduce((ac ,val,inx)=> {
//      return ac + val
// })


console.log(res);





