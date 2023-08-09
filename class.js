// syntax for PRIVATE variables 
class myclass{
    #a=20;
    #b=10;

    constructor(value1,value2){
        this.#a=value1;
        this.#b=value2;
    }
    print(){
        console.log("im am printing");
    }
}

//a and b cant be accessed from outside , only it can be in my class
const obj=new myclass(); 
console.log(obj);


// in the same class above if we want to get data we can create a fucntion of getdata and call it as getdata();
// but there are inbuilt fucntions set , get(returns) which dont need to be called as functions

class myclass1{
    #a1=20;
    #b1=10;

    constructor(value1,value2){
        this.#a1=value1;
        this.#b1=value2;
    }
    get getdata(){
        return this.#a1;
    }
    set setA(z){
        this.#a1=z;
    }
    set setB(y){
        this.#b1=y;
    }
    print(){
        console.log("im am printing");
    }
}

//a and b cant be accessed from outside , only it can be in my class
const obj1=new myclass1(); 
console.log(obj1);
obj.print(); // calling a normal function
obj1.setA=23;
obj1.setB=43;
console.log(obj1.getdata);

//inheritance in javascript

class school extends myclass1{
    #schoolname;

    constructor(value1,value2,w,){  //value1 , value 2 have to be written also and we will have to pass paramters to them also bcz in the base class constructor has them
       // to write super(); & shld be the very first line inside the constructor is very important bcz we want to call the constructor of base class
       super(value1,value2);
        this.#schoolname=w;
    }
    print2(){
        console.log(this.#schoolname);
    }

}

//const sch=new school("hiltons");// this will give error

// bcz myclass1 is extended therefore u will have to give parameters of myclass1's cosntructor aswell
const sch=new school(12,13,"hiltons");
sch.print(); // will print : im printing
sch.print2(); // will print hiltons