let today=new Date();
let currentMonth=today.getMonth();
let currentYear=today.getFullYear();
let selectYear=documnet.getElementById("year");
let selectMonth=document.getElementById("month");
let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let monthAndYear=document.getElementById("monthAndYear");
showCalender(currentMonth,currentYear);
function next()
{
currentYear=(currentMonth===11)?currentYear+1:currentYear;
currentMonth=(currentMonth+1)%12;
showCalender(currentMonth,currentYear);
}
function previous()
{
currentYear=(currentMonth===0)?currentYear-1:currentYear;
currentMonth=(currentMonth===0)?11:currentMonth-1;
showCalender(currentMonth,currentYear);
}
function changeCalender()
{
currentYear=parselnt(selectYear,value);
currentMonth=paraselnt(selectMonth,value_);
showCalender(currentMonth,currentYear);
}
function showCalender(month,year)
{
let firstDay=(newDate9year.month)).getDay(0;
let daysInMonth=32-new Date(year,month,32).getDate();
let tbl=document.getElementById("calender-body");
tbl.innerHTML="";
monthAndYear.innerHTML=months[month]+""+year;
selectYear.value=year;
selectMonth.value=month;
let date=1;
for(let i=0;i<6;i++)
{
let row=document.createElement("tr");
for(let j=0;j<7;j++)
{
if(i==0&&j<firstDay)
{
let cell=document.createElement("td");
let cellText=document.createTextNode("");
cell.appendChild(cellText);
row.appendChild(cell);
}
else if(date>daysInMonth)
{
break;
}
else
{
let cell=document.createElement("td");
let cellText=document.createTextNode(date);
if(date===today.getData()&&year===today.getFullYear()&&month===today.getMonth())
{
cell.classList.add("bg-info");
}
cell.appendChild(cellText);
row.appendChild(cell);
date++;
}
}
tbl.appendChild(row);
}
}
}
