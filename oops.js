//PRIMTIVE DATA TYPE : IN WHICH CHANGES CANT BE MADE , AND PASS BY VALUE IS DONE 

//ex. 
const a="hello world";
//a.newMethod="hello"; // will give error

//REFERENCE DATA TYPE: CHANGES CAN BE MADE DURING RUN TIME 
//Ex.
const b={
    name:"iram",
    age:20
};
//if we do ,
 b.added="some value";
//now object b will have 3 elements , and passing by reference is done

// if two variable are linked by reference then any change made in any of reference will reflect in other
// eg. change is made in an object which will be obviously reference variable and if that object is linked with other variable then chnages wil come in both

//CREATE MULTIPLE OBJECTS AT A TIME 

//we can create an object like

const romanregins={
    weight:254,
    height:180,
    quote:()=>{
        console.log("head of the table");
    },
};

//FACTORY FUNCTION
//BUT IF WE WANT ALL THE WWE RESTLERS THEN WE CANT SIT AND MAKE 100 OBJECTS
 //THERFORE we can make a single object and keep passing values inside it as many time as we want it

 function wweStars(a,b,quote){
   return {
    weight: a,
    height:b,
    quote:()=>{
        console.log(quote);
             },
          };

 }

 const sethrollins=wweStars(300,230,"master");
 console.log(sethrollins)

 //CONSTRUCTOS MAY BE BUILD USING NEW  , first letter should be capital Star
 const bb =  new wweStars(234,145,"leader");

 //another way to make numerous objects 

 function Enemy(size,speed){
   this.size=size;  
   this.speed=speed;
   
 }

 const enemy2=new Enemy(254,370);// one enemy created
 //FOR MORE THAN ONE MAKE ARRAY


 const enemies=[];
 for(let i=0;i<100;i++){
enemies.push(new Enemy((Math.random()*100).toFixed(0) ,230));

 
 }
 console.log(enemies);