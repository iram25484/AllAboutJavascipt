const url="https://catfact.ninja/fact";
const h1=document.querySelector("h1");
// fetch is keyword to fetch data 
// hovering on fetch will show that it returns a promise . therfore we use .then , then we create an arrow function inside it with paramter response which will have content of url , on consoling log this response we will get the url and other things but not the response itself ,
// if we console log reponse.json then it will return a promise that is pending bcz it will take time to convert the api
// therfore if it comes pending then we would want another .then to handle it , and this .then will give us the correct data that we want through an api
const fetchData=()=>{
    fetch(url)
    .then((response)=>{
   return response.json()
    })
    .then((data)=>{  h1.innerText=data.fact  })      // data has response.json  // if we did  h1.innerText=data then it would print object object
    .catch((e)=>{console.log("error")})
    .finally(()=>console.log("all done"));
};

fetchData(); // dont forget to call the function

//above code can be written in more shortform 
// const fetchData=()=>{
//     fetch(url).then((response)=>response.json())
//     .then((data)=> console.log(data))  // data has response.json console.log(data););
//     .catch((e)=>console.log("error"))
//       .finally(()=>console.log("all done"))

// };



