const a=Math.random(); // will give any value

// if you want values suppose bw 1 to 7 then

const c=Math.random()*6 +1;  // its least value will be 0+1 while max will be 6.99, if u want to return 7 then round it off
console.log(a);

const b=Math.round(Math.random()*6 +1);

console.log(b);

//PRINT CURRENT DATE
const g= new Date();
console.log(g);

// ACCESS DAY DATE MONTH OR ANYTHING REKATED TO DATE ,
//SYNTAX : g.getDate()

console.log(g.getDate());
console.log(g.getDay());
console.log(g.getHours());
console.log(g.getFullYear());
console.log(g.getMinutes());




