//arrow function

//js like functions we js put arrow in right side instead of brackets

const myfunc= (a,b)=>{
    console.log(a+b);

}

//difference in arrow func:
// function cant be accessed if it is not initialized before unlike function

myfunc(1,2);
 

//FIND FUNCTION IN ARRAY
// it finds only one value exactly suppose if array=[1,2,3] and condition is value>1 then ans will be 2 only 
// iterates itself
const array=[1,2,3,4,6];

const x=array.find((value,index)=>{
if(value>3)
return value;
});

console.log(x);  //  will print only 4

//FILTER ARRAY 
// return a complete new array eg in above eg. of value>1 we will get [2,3] as result and as a new array
// iterates itself
const y=array.filter((value,index)=>{
    if(value>1)
    return value;
});

console.log(y); // o/p= [2,3,4,5,6]

//EVERY FUNCTION
// iterates itself
//returns boolean value

const z=array.every((value,index)=>{
    if(value>2)
    return value ;
})

console.log(z);

//will return false bcz it will iterate and find the first element to be 1 which is not greater than 2

//SOME FUNCTION 
//iterates itself
//return boolean value 
// unlike every it will return true if it finds even one element satisfying the condition

const w=array.some((value,index)=>{
    if(value>4)
    return value;
})
console.log(w);

//FOR OF LOOP
// iterates like normal loop
// doesnt need length just pass the array

for(let value of arr){
    value+=3; // but the original array wont change
    console.log(value); 
}


//FOR EACH LOOP
//iterates js like for loop
// dont need to pass anything
// use dot

array.forEach((value,index)=>{
    totalsum+=value;
})

console.log(totalsum);

