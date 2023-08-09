//CALLBACK 
// happens when we pass a function as a paramter 

function sum(a,b,func1){  // we pass the function as reference
    const result=a+b;
func1(result);
}

function display(result){
    const h1=document.querySelector("h1");
    h1.innerText=result;
}

// now whenever we want to call both sum and display we can js call sum and pass display as a parameter and call it inside the high order function which is sum here (high order function - jiske andr function as a paramter pass krey ho) and the function that is sent as paramter is called call back function kyuki woh baad me call hotey hai
// another example of call back function 
// const arr=[1,2,3,4];
// arr.forEach(()=>{         HERE FOREACH IS HIGH ORDER BCZ IT WILL TAKE A FUNCTION AS PARAMETER WHICH WILL BE CALLED AFTER FOREACH IS ACCESSED

//       })
sum(20,35,display);

// we can call it multiple times too . 
sum(20,35,alert);


// suppose we want to use 2 functions which are nearly equal eg. multiply and divide then we can use callback 

const arr1=[10,20,30];

function multiplyORdivide (array=[],func2)
{
    const ans=[];
    for(let i=0;i<2;i++)
    {    ans.push(func2(arr1[i])); // we are callinf the function , it will return a number which will be pushed inside ans
}
console.log(ans);
}

// either v can do this

// function multiply(a)
// {
//     return a*10;
// }
// function divide(a)
// {
//     return a/10;
// }
// multiplyORdivide(arr1,multiply);
// multiplyORdivide(arr1,divide);

// OR instead of making separate fucntion as multiply and diivde diirectly pass arrow fucntion like:

// multiplyORdivide(arr1,(a)=>(){
//     return a*10;
// });

// multiplyORdivide(arr1,(a)=>(){
//     return a/10;
// });

// OR u could even return js as :

multiplyORdivide(arr1,(a)=>a*10);  //shorcut of arrow function to return anything
multiplyORdivide(arr1,(a)=>a/10);

//often there occurs callback hell , see callback can help the code to be asynchronous but when we put many callbacks one inside another ,eg settimeout inside another settimeout which becms dependent on each other and waits for anpther to finish and if there are any glitch in between then the code bczm wrong , effects readability and maintainace
// to help this out we have promises
