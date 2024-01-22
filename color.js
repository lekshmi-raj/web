let
colorArray=["Cyan","Red","LightSeaGreen","Pink","Blue","Black","Yellow"];
let button=document.getElementById("Color_change");
let label1=document.getElementById("color");
button.addEventListener("click",changeBgcolor);
function changeBgcolor()
{
randomindex=Math.floor(Math.random()*colorArray.length);
let selectColor=colorArray[randomindex];
document.body.style.backgroundColor=selectColor;
label1.innerHTML=selectColor;
}
