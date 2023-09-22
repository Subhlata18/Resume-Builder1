function addNewccField(){
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("ccfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");
    let ccOb = document.getElementById("cc");
    let ccAddButtonOb= document.getElementById("ccAddButton");
    ccOb.insertBefore(newNode, ccAddButtonOb);
}

function addNewtsField(){
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("tsfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");
    let tsOb = document.getElementById("ts");
    let tsAddButtonOb= document.getElementById("tsAddButton");
    tsOb.insertBefore(newNode, tsAddButtonOb);
}
function addNewssField(){
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("ssfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");
    let ssOb = document.getElementById("ss");
    let ssAddButtonOb= document.getElementById("ssAddButton");
    ssOb.insertBefore(newNode, ssAddButtonOb);
}
function addNewhField(){
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("hfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");
    let hOb = document.getElementById("h");
    let hAddButtonOb= document.getElementById("hAddButton");
    hOb.insertBefore(newNode, hAddButtonOb);
}
function addNeweqField(){
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");
    let eqOb = document.getElementById("eq");
    let eqAddButtonOb= document.getElementById("eqAddButton");
    eqOb.insertBefore(newNode, eqAddButtonOb);
}
function addNewachField(){
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("achfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");
    let achOb = document.getElementById("ach");
    let achAddButtonOb= document.getElementById("achAddButton");
    achOb.insertBefore(newNode, achAddButtonOb);
}
function addNewprField(){
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("prfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");
    let prOb = document.getElementById("pr");
    let prAddButtonOb= document.getElementById("prAddButton");
    prOb.insertBefore(newNode, prAddButtonOb);
}
//generating cv
function Generatecv(){

   // console.log("generate cv");
    let adr = document.getElementById("adr").value;
    let addressT = document.getElementById("addressT");
    addressT.innerHTML = adr;

    
   let nf = document.getElementById("nf").value;
   let namet1 = document.getElementById("namet1")
   namet1.innerHTML = nf;
   
  
   //cgpa
   let cg= document.getElementById("cg").value;
   let cgpat=document.getElementById("cgpat");
   cgpat.innerHTML=cg;
//direct
document.getElementById("namet2").innerHTML = nf;
//repeating
//contact
document.getElementById("contactt").innerHTML = document.getElementById("cn1").value;
//address
document.getElementById("addressT").innerHTML = document.getElementById("adr").value;
//fblink
document.getElementById("fbt").innerHTML = document.getElementById("fb").value;
//isntagram link
document.getElementById("inst").innerHTML = document.getElementById("ins").value;
//linkedin link
document.getElementById("lnkt").innerHTML = document.getElementById("lnk").value;
//TECHNICAL SKILLs
let tes= document.getElementsByClassName("tsfield");
let str = "";
for(let e of tes){
    str= str +`<li> ${e.value} </li>`;
}
document.getElementById("tst").innerHTML = str;

//soft skills

let sss= document.getElementsByClassName("ssfield");
let str1 = "";
for(let e of sss){
    str1= str1 +`<li> ${e.value} </li>`;
}
document.getElementById("sst").innerHTML = str1;
 
//hobbies

let hob= document.getElementsByClassName("hfield");
let str2 = "";
for(let e of hob){
    str2= str2 +`<li> ${e.value} </li>`;
}
document.getElementById("ht").innerHTML = str2;

 //projects

 let pr= document.getElementsByClassName("prfield");
let str3 = "";
for(let e of pr){
    str3= str3 +`<li> ${e.value} </li>`;
}
document.getElementById("prt").innerHTML = str3;
//educational qualification

let acq= document.getElementsByClassName("eqfield");
let str4 = "";
for(let e of acq){
    str4= str4 +`<li> ${e.value} </li>`;
}
document.getElementById("eqt").innerHTML = str4;
// co-curr act.

let cca= document.getElementsByClassName("ccfield");
let str5 = "";
for(let e of cca){
    str5= str5 +`<li> ${e.value} </li>`;
}
document.getElementById("ccat").innerHTML = str5;

//achievement

let ach= document.getElementsByClassName("achfield");
let str6 = "";
for(let e of ach){
    str6= str6 +`<li> ${e.value} </li>`;
}
document.getElementById("acht").innerHTML = str6;

document.getElementById('cv-form').style.display='none'
document.getElementById('template-right').style.display='block'
}
//print cv
function printCV(){
    window.print();
}