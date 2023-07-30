console.log(document.body)
// by document you can access any part of html and manipulate it
// eg document.head
// through document.body u will get what so ever in present inside the body
console.log(document.documentElement) 
// above will give all tags of html
console.log(document.firstChild)
// will return text bcz it takes the blank space before div as first child

// to access very first div of html use below
console.log(document.body.firstElementChild);

console.log(document.childNodes)// will return all the div scripts text and tags
console.log(document.childre)// will return only the div and scripts

// all the div and other tags might look  like array but they are not 
// to convert them into array use ARRAY

const arr=document.body.children;
const newArr=Array.from(arr);

// now you can iterate over the tags and use all functions of array   
console.log(arr[0]);
arr[0].innerHTML=`<span class="two">bojour</span>`;  // you can edit the html my literally writing it but take care of the backticks

// you can also give it style
arr[0].style.backgroundColor="yellow";


//suppose u wanna style a button named with id = mybt
//const btt=document.getElementById("mybtn");
//btt.style.backgroundColor="red";
//btt.style.padding="20px 40px";
//btt.style.color="white";


console.log(arr[0]);
// instead of targetting the first div as child 
// you can give it id and then access it as 
//console.log(id);

console.log(thisone);
//OR
console.log(document.getElementById("thisone"));

// accessing by class 
// remember it is getElementsByClassName bcz u can give class to mutiple elements unlike id
console.log(document.getElementsByClassName("yes"))
// but remember u will get a collection of elements
// you can target the firt element as
const x=document.getElementsByClassName("yes")
console.log(x[0]);

//accessing through name 
// you can access by name of the input
console.log(document.getElementsByName("yourname"));

// by tag
console.log(document.getElementsByTagName("span")) // here definitely you will get collection of span which you can again target by putting in a variable then eg. x[0]

// by queryselector
console.log(document.querySelector(".yes")); // class by . and id by #

// to know the id or class
const y=document.getElementById("hola");
console.log(y.getAttribute("id"));

//Event onclick

const z=document.getElementById("three");

z.onclick=bring; //  remember dont call it here js give the name

function bring()
{
    console.log("on click done");
const h2=document.createElement("h2"); // creating element by dom
h2.innerText="heading added";
document.body.append(h2);    

}

const r=document.getElementById("four");

r.onclick=deletee;

function deletee(){
    console.log("heading deleted")
    const h2=document.querySelector("h2")
    h2.remove(); // simply removing the element we created using dom
}
