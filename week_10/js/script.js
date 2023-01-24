document.getElementsByTagName("h1")[1].innerHTML="getElementsByTagName";
document.getElementsByClassName("p1")[0].innerHTML="Hello this is week10";
document.getElementsByClassName("p1")[0].style.cssText="background-color:black; color:blue; font-size:20px";

var select= document.getElementsByClassName("p1");
for(var i=0; i<=select.length;i++){
    select[i].style.cssText="background-color:peachpuff; color:blue; font-size:20px";
}