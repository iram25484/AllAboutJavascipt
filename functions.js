function find(){
    console.log("hello");
}
find();

let myfunc=function (){
    console.log("hola");
}

myfunc();
let arra=[1,2,3];
let s=0;
function findarr(arr=[]){
    for(i=0;i<arr.length ;i++)
    {
        s=s+arr[i];
    }
    console.log(s);
}

findarr(arra);