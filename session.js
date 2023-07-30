const input=document.getElementById("input");
const btn=document.getElementById("btn");
const delete1=document.getElementById("delete");

const btnclick=()=>{
alert(input.value);
//SESSION STORAGE can store values like arrays , they actually store objects on form of array , js go to >> in right side of console ,then application then session storage under that the link of wherever ur sesion is but mind you that whenever you change your session the data will be lost

sessionStorage.setItem("key1",input.value);

// now you can also access whatever the input is in the entire code  without clicking the input again js give the key to session storage type the following
//sessionstorage.getItem("key1")

//session storage has scope of the session and tab where it is working , if new tab is opnend for the same website then data will be lost inside it
}

btn.addEventListener("click",btnclick);

if(sessionStorage.getItem("key1")) // if and only if there is an input then give an alert
{alert(sessionStorage.getItem("key1"));}

//when delete button is pressed we want to print length in the console of how many keys have been entered
delete1.addEventListener("click",()=>{
    console.log(sessionStorage.length);
})

// SESSION storage has several other functions too