const url="https://catfact.ninja/fact";
const h1=document.querySelector("h1");

//SYNTAX OF ASYNC FUCNTION  , async comes before await 

// async function(){

// }

//or

//now the below code WAS OF PROMISES AND API FECTHING , but we see how to write it easliy with help of async await

// const fetchData=()=>{
//     fetch(url)
//     .then((response)=>{
//    return response.json()
//     })
//     .then((data)=>{  h1.innerText=data.fact  })      // data has response.json  // if we did  h1.innerText=data then it would print object object
//     .catch((e)=>{console.log("error")})
//     .finally(()=>console.log("all done"));
// };

// fetchData(); 

// const fetchData= async ()=>{
//     const response=await fetch(url); // sicne url is an api therefre response is a  promise and after every promise u will have to put await
//     const data= await response.json(); // repsonse is promise therefore put await
//     h1.innerText=data.fact;
// };

// //HOW TO HANDLE ERROR IN ASYNC AWAIT
// //1st method
// // fetchData().catch((e)=>console.log(e));  


// //OR 

// const fetchData1= async ()=>{

//     try{
//     const response=await fetch(url); // sicne url is an api therefre response is a  promise and after every promise u will have to put await
//     const data= await response.json(); // repsonse is promise therefore put await
//     h1.innerText=data.fact;
//     }

//     catch(error)
//     {
//         console.log(error);
//     }

//     finally{
//         console.log("processed");
//     }
// };

// you can also throw error as 

const fetchData3= async ()=>{

    try{
        throw "meri mrzi ka error"; // if any of the line doesnt work then catch will throw this error
   //or
   throw new Error("meri mrzi ka error")
   
        const response=await fetch(url); // sicne url is an api therefre response is a  promise and after every promise u will have to put await
    const data= await response.json(); // repsonse is promise therefore put await
    h1.innerText=data.fact;
    }

    catch(error)
    {
        console.log(error);
    }

    finally{
        console.log("processed");
    }
};