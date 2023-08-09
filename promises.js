//promises has 2 things resolve and reject , for every resolve we have .then while for reject we have .catch that is linked to .then right after these both again are high order fucntions which has a callback inside

const a =new Promise((resolve,reject)=>{
    resolve("promise fullfilled") // calling resolve means calling .then thereofre the paramter inside .then will be the text
reject("some error");
});
// syntax 1 - LESS used 
// a.then((arrow function for resolve),(arrow function for reject))

// a.then((parameter)=>{
//     console.log(parameter);
// },(error)=>{
//     console.log(error);
// })

a.then((parameter)=>{
    console.log(parameter);
}).catch((error)=>{
    console.log(error);
});


//another example of using promises , this time with 'finally'
// let arr3=[];
// const fetchData = (arr3 = []) => { 
//     return new Promise((resolve, reject) => { setTimeout(() = { 
//         arr3.push({ name: "abhi" });
//          if (arr3.length > 0)
//           resolve("Data fetch")
//          else
//           reject("Some technical Error"); 
        

// }, 2000);
//     });
// };

// fetchData(arr3)

// .then((message) => console.log(message)) 
// .catch((message) => console.log(message)) 
// .finally(() => console.log("finally will work in any case")

