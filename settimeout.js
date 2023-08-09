print=(name,income,gender)=>{
    console.log(`welcome ${name},your income is ${income} and you are ${gender}`);
}

// syntax , time is in milisecond
setTimeout(print("iram"),5000);


// this wont work : setTimeout(print("iram",200000,"female"),5000) ;

//FOR GIVING MULTIPLE PARAMETERS;
setTimeout(print,5000,"iram",2000,"female");

//short form

// setTimeout((name,income,gender) => {
//     console.log(`welcome ${name},your income is ${income} and you are ${gender}`);
// }, timeout);

// you can PREVENT THE SETTIMEOUT BY clearTimeout js pass the id eg 

// btn.addEventListener("click",()=>{
//     clearTimeout(give the id) // you can store the function inside a const variable and then pass that variable as the id eg const x= print=()=>{...}  thne cleartimeout(x); will prevent the function to work
// })

//queryselector in the addevent selects via the tag name