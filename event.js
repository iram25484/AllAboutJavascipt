const heading=document.getElementById("heading");
const btn=document.getElementById("btn");
const btn2=document.getElementById("btn2");

const box1=document.getElementById("box1");
const input=document.getElementById("input");
btn.addEventListener("click",()=>{
    box1.style.backgroundColor="red";
    box1.style.borderRadius="5px";
    box1.style.transition=  "0.5s";
   
})

box1.addEventListener("mouseout",()=>{
    // box1.classList.add("myclass");
    btn2.style.transform="scale(1.1)";
})

btn2.addEventListener("mouseover",()=>{
    heading.style.backgroundColor="grey";
    heading.style.transition="0.7s";
})

//below fucn will give coordiantes or where mouse is on the screen on clicking there

// addEventListener("click",(e)=>{
//     console.log(e.clientX);
//     console.log(e.clienty);

// })

//IF YOU WANT TO ACCESS WHATEVER IS WRITTEN IN INPUT :

input.addEventListener("change",(e)=>{
    console.log(e.target.value);
})