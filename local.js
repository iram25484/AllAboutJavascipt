const input=document.getElementById("input");
const btn=document.getElementById("btn");
const delete1=document.getElementById("delete");
const btn2=document.getElementById("btn2");

const btnclick=()=>{
alert(input.value);

//to access LOCAL STORAGE go to >> right side of console, application, local storage and under it http.127...

localStorage.setItem("key1",input.value);

// now you can also access whatever the input is in the entire code  without clicking the input again js give the key to session storage type the following
//localStorage.getItem("key1")

//unlike session storage , local storage saves the information in the webpage , even if tab changes , or entire browser is closed, the information remains , any changes made are saved too untill and unless we manually delete the informaion eg. here if we click delete and then use removeitem.
}


btn.addEventListener("click",btnclick);

if(localStorage.getItem("key1")) // if and only if there is an input then give an alert
{alert(localStorage.getItem("key1"));}

//when delete button is pressed we want to print length in the console of how many keys have been entered
delete1.addEventListener("click",()=>{
    console.log(sessionStorage.length);
})

// local storage has several other functions too

// STORING OBJECTS OF OBJECTS IN LOCAL STORAGE

//information stored in local storage is always of string type , suppose we want to pass object like { name:iram , age: 18} which will be stored as object object but we will not be able to access it , therefore we use
//JSON which can covert objects into string if we use JSON.stringify and into object is we use JSON.parse

btn2.addEventListener("click",()=>{
    localStorage.setItem("key2",JSON.stringify({name:"iram", age:20}));  //object will turn into string (cuz directly we can set item as object or {name:"iram", age:20} so we convert into string using json)
})// now on clicking button2 we will get complete object

//now if u WANT TO CONVERT THE KEY2 INTO OBJECT THEN:
//JSON.parse(localStorage.getItem("key2")); // will be used
