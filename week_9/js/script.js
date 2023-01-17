alert("PLEASE DONT MAKE NOISE IN CLASS");
console.log("Hi, I am Sami Gautam");
console.log("I am 19 years old.");
console.log(document.getElementById("paragraph").innerHTML);
document.getElementById("paragraph").innerHTML="<h1>HELLO</h1>";
document.getElementById("paragraph").style.cssText="color:blue; background:red";
//document.getElementById("paragraph").style.color="blue";
//document.getElementById("paragraph").style.background="red";

//const age =10;
//age =11;
var age=13;
let age1=14;
console.log(typeof age);
console.log(typeof age1);

var name="Sami";
console.log(prompt("Enter a name: "));
document.getElementById("message").innerHTML="Hello"+" "+"My name is "+name; 