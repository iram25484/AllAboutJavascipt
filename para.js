const input=document.getElementById("numberw");


const container=document.querySelector(".container")

const generateword=(n)=>{
let txt="";
    const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0;i<n;i++)
    {
       txt+=letters[(Math.random()*25).toFixed(0)];
    }
    return txt;
};


const generatePara=()=>{
   const numberofwords=Number(input.value);
let textp="";

    const para=document.createElement("p");
for(let i=0;i<numberofwords;++i)
{
    let random=(Math.random()*15).toFixed(0);
textp+=generateword(random);
textp+=" ";
}
para.innerText=textp;
    para.setAttribute("class","paras");

    container.append(para);


};

