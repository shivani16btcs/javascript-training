//=======increment and decrement button========
/*function incre()
{
    document.getElementById("val").value=parseInt(document.getElementById("val").value)+1;
}

function decre()
{
    document.getElementById("val").value=parseInt(document.getElementById("val").value)-1;
}
*/

//=================clock in js=================
/*
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  */


//================image slider================
/*
var a=0;
function picchange(val){
if(val=='+' && a<3)
{
    a=a+1;
}
else if(val=='-' && a>0)
{
    a=a-1;
}
else if(val=='+' && a==3)
{
    a=0;
}
else if(val=='-'&& a==0)
{
    a=3;
}
replace(a);
}

function replace(u)
{ u=parseInt(u);
switch(u)
{
    case 0:
        document.getElementById("image").src="ben10.png";
        break;
    case 1:
        document.getElementById("image").src="jerry.png";
        break;
    case 2:
        document.getElementById("image").src="micky.jpeg";
        break;
    case 3:
        document.getElementById("image").src="sonic.png";
        break;
}
}
*/
/*
if(u==0)
document.getElementById("image").src="ben10.png";
else if(u==1)
document.getElementById("image").src="jerry.png";
else if(u==2)
document.getElementById("image").src="micky.jpeg";
else if(u==3)
document.getElementById("image").src="sonic.png";
}
*/

//=============pig game================
/*var player1count=0;
var player2count=0;

function checkselect()
{
initialise();

if(s1.checked){
player1count++;
rolldice();
    }

else if(s2.checked){
player2count++;
rolldice();   
}

    else
    alert("please fist select the turn"); 
}

function initialise()
{
    if(player1count>0&&(s2.checked))
    player1count=0;
    if(player2count>0&&(s1.checked))
    player2count=0;
}



function rolldice()
{
    var x=random_no();
    var y=random_no();
    displayimg1(x);
    displayimg2(y);
    calculatetotal(x,y);
  console.log("player1  "+player1count) 
  console.log("player2  "+player2count) 
}

function random_no(){
var a=Math.floor(Math.random()*6+1);
return a;
}

function displayimg1(x)
{
    x=parseInt(x)
    switch(x)
    {
        case 1:
            document.getElementById("rolldice1").src="dice-1.png"; 
            break;
        case 2:
            document.getElementById("rolldice1").src="dice-2.png"; 
            break;
        case 3:
            document.getElementById("rolldice1").src="dice-3.png"; 
            break;
        case 4:
            document.getElementById("rolldice1").src="dice-4.png"; 
            break;
        case 5:
            document.getElementById("rolldice1").src="dice-5.png"; 
            break;
        case 6:
            document.getElementById("rolldice1").src="dice-6.png"; 
            break;
    }   
}

function displayimg2(y)
{
    y=parseInt(y)
    switch(y)
    {
        case 1:
            document.getElementById("rolldice2").src="dice-1.png"; 
            break;
        case 2:
            document.getElementById("rolldice2").src="dice-2.png"; 
            break;
        case 3:
            document.getElementById("rolldice2").src="dice-3.png"; 
            break;
        case 4:
            document.getElementById("rolldice2").src="dice-4.png"; 
            break;
        case 5:
            document.getElementById("rolldice2").src="dice-5.png"; 
            break;
        case 6:
            document.getElementById("rolldice2").src="dice-6.png"; 
            break;
    }   
}

function calculatetotal(x,y){
   
if(s1.checked)
{
document.getElementById("current_score1").innerHTML=
parseInt(x)+parseInt(y);
}
else if(s2.checked){
document.getElementById("current_score2").innerHTML=
parseInt(x)+parseInt(y);
}
console.log(document.getElementById("current_score1"));
console.log(document.getElementById("current_score2"));

}

function hold()
{
    if(s1.checked&&player1count==1)
    {
    document.getElementById("total_score1").innerHTML=
    parseInt(document.getElementById("total_score1").innerHTML)+
    parseInt(document.getElementById("current_score1").innerHTML);
    }
    else if(s2.checked&&player2count==1){
    document.getElementById("total_score2").innerHTML=
    parseInt(document.getElementById("total_score2").innerHTML)+
    parseInt(document.getElementById("current_score2").innerHTML);
    } 
    else if(player1count>1)
    document.getElementById("total_score1").innerHTML=0;
    else if(player2count>1)
    document.getElementById("total_score2").innerHTML=0;

    checkwinner();
  
}



function checkwinner()
{
    if(s1.checked&&document.getElementById("total_score1").innerHTML>=50)
    alert("Congratulations ('_') player1 won the match by score "+(document.getElementById("total_score1")
    .innerHTML-document.getElementById("total_score2").innerHTML) );
    if(s2.checked&&document.getElementById("total_score2").innerHTML>=50)
    alert("Congratulations ('_') player2 won the match by score "+(document.getElementById("total_score2")
    .innerHTML-document.getElementById("total_score1").innerHTML) );

}
*/


//====================================PRACTICE========================================


/* DOUBT 1  */
/*
var person=function (name,year){
    this.name=name;
    this.year=year; 
   
}
person.prototype.full= function()
{console.log(this.name+" "+this.year)}
var john=new person("john",1999);
person.prototype.calculate_age=function(year){
console.log(2020-year);
}

console.log(john);
john.calculate_age(john.year);

var marry=new person("marry",2000);
marry.calculate_age(marry.year);
*/

/* calling a function [CALLBACK]

var year=[1990,1999,2000,2005,2001];
function arrayvalc(arr,fn){
    var arres=[];
    for(var i=0;i<arr.length;i++)
    {
        arres.push(fn(year[i]));
    }
    return arres;
}

function calculate_age(year)
{
    return(2020-year);
}

var p=arrayvalc(year,calculate_age);
console.log(p);
*/

/* returning a function
var interviewquestion= function(job)
{
    if(job=='teacher')
    return function(name){
        console.log(name+ " what subject u teach");
    }

    else if(job=='designer')
    return function(name){
        console.log(name+" what so u know about ux designing");
    }

    else 
    return function(name){
        console.log(name+" how do u do?");
    }
}

var teacherq=interviewquestion('teacher');
teacherq('shivani');
teacherq('john');
*/


/* IIFE
(function(){
    console.log("hello");
})();
*/

/*
function retirement(age){
var a="no of year left for retirement";
return function(){
var year_left=65-age;
console.log(year_left+" "+a);//closure inner function can acess var a even outer function get returned
}
}

a=retirement(34);
a();
*/

//======================challenge 7========================
/*
var question=function(question,answer,correct)
{
    this.question=question;
    this.ans=answer;
    this.correct=correct;
}
var q1=new question('what is 2+2',[3,4],2);
var q2=new question('is javascript is single threaded',['yes','no'],1 );
var q3=new question('is array is an object',['no','yes'],1);

function random()
{
    return Math.floor(Math.random()*3+1);
}

var generatequestionno= function()
{
var a=random();
showquestion(a);
}

function showquestion(a)
{
    switch(a)
    {
        case 1:
            console.log(q1.question+'\n1 '+q1.ans[0]+'\n2 '+q1.ans[1]);
            break;
        case 2:
            console.log(q2.question+'\n1 '+q2.ans[0]+'\n2 '+q2.ans[1]);
            break;
        case 3:
            console.log(q3.question+'\n1 '+q3.ans[0]+'\n2 '+q3.ans[1]);
            break;
    }
    checkans(a);
}

generatequestionno();

function checkans(q_no)
 {
    var answer = prompt("Please enter your option", );
   switch(q_no)
   {
      
       case 1:
        {
            if(answer==q1.correct)
            console.log("correct answer");
            else
            console.log("wrong answer");
            break;
        }
        case 2:
        {
            if(answer==q2.correct)
            console.log("correct answer");
            else
            console.log("wrong answer");
            break;
        }
        case 3:
        {
            if(answer==q1.correct)
            console.log("correct answer");
            else
            console.log("wrong answer");
            break;
        }  
    }

  console.log(answer);
}
*/

//ES6
/*
var name="shivani";
var last="yadav";
const n=(`${name} and ${last}`);
console.log(n.startsWith('s'));
console.log(n);
*/


//***************************BUDGET APP********************** *
/*
window.onload = function() {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];;
    var date = new Date();

    document.getElementById('Monthyear').innerHTML = months[date.getMonth()] + ' ' + date.getFullYear();
};

function add_discription() 
{        
var income_discription = document.getElementById("discription").value;
var amount = document.getElementById("incomevalue").value;  
var overallincome,overallexpanses;

var output=selectsign();
 if(output=='+')
{
    var rowCount =myTableData1.rows.length;
    var row = myTableData1.insertRow(rowCount);
    row.insertCell(0).innerHTML= income_discription;
    row.insertCell(1).innerHTML= amount;
    (document.getElementById("overallincome").value)=
    parseInt(document.getElementById("overallincome").value)+
    parseInt(amount);
    

}
else if(output=='-')
{  
     var rowCount =myTableData2.rows.length;
    var row = myTableData2.insertRow(rowCount);
    row.insertCell(0).innerHTML= income_discription;
    row.insertCell(1).innerHTML= amount;
    (document.getElementById("overallexpanses").value)=
    parseInt(document.getElementById("overallexpanses").value)+
    parseInt(amount); 
   
}
overallincome=(document.getElementById("overallincome").value);
overallexpanses=(document.getElementById("overallexpanses").value); 
var overallBudget=
parseInt(overallincome)-parseInt(overallexpanses);
console.log(overallBudget);
document.getElementById('buget').innerText = overallBudget;
}

function selectsign()
{
selectElement =document.getElementById("sign");   
var output=selectElement.options[selectElement.selectedIndex].text; 
return output;
}

*/

var a =function(tom){
    var b="sham";
    console.log(tom+b);
}

a.call("tomallo");