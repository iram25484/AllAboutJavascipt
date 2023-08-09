navigator.geolocation.getCurrentPosition((d)=>{console.log(d.coords)}, (e)=>console.log(e))  //navigator.geolocation takes a callback function and aslo throws error
// above func can give longitude and ltitiude , d.coords will give coordinates
console.log(history); // will give you the number of times tab was opened
console.log(history.back()) // is a func which will take you to the previous tab u were working on 
console.log(history.forward()); //is also a function that takes us forward in

//another fucntion location. can give us infoormation about the link or url of curent webpagge

console.log(location.hostname) // bs host ka naam dega
console.log(location.port);
console.log(location.pathname);
console.log(location.host)

console.log(location.href) // will give the complete url 

// fucntion to reload the webpage
// RELOAD A PAGE
// const func1=()=> location.reload(); // short me likh sktey h directly return krna ho to

// u should put this function inside id of a button and then call it , whenevr then btn is clicked then the page will get reloaded

// IF U WANT THE PAGE TO GO TO ANOTHER SITE THEN USE ASSIGN AND PUT THE URL OF DESIRED SITE and then call the fucntion

const func1=()=>{location.assign("https://www.youtube.com/watch?v=bwHtTPvaMYE&list=PLt5mNkGuWcuXXFysDLVdCHRh33p9HiGF7&index=22") }
func1();

// U CAN ALSO USE REPLACE TO GO TO ANOTHER SITE
//DIFFERENCE BW LOCATION.ASSIGN AND LOCATION.REPLACE IS THAT ASSIGN WILL PROVIDE A BACK ARROW TO GO TO PREVIOUS PAGE BUT REPLACE WILL COMPLETELY REPLACE THE ENTIRE PAGE TO THE URL GIVEN WITH NO BACK ARROW

// SYNTAX 
// const func1=()=>{location.replace("https://www.youtube.com/watch?v=bwHtTPvaMYE&list=PLt5mNkGuWcuXXFysDLVdCHRh33p9HiGF7&index=22") }
// func1();
