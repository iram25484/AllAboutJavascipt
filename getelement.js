let s="hello my name is alex";

let heading=document.getElementById("container");
console.log(heading); // o/p=name

heading.innerHTML=s; //html will be changed to that of s
heading.innerText=s; //text will show text inside s
console.log(heading);
heading.style.backgroundColor="red"; // backgrnd colr will change to red
heading.style.color="green"; // make sure to put " "
