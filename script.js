var div1=document.querySelector("#main #facebook");
var btn=document.querySelector("#main button");
var div2=document.querySelector("#main #f");
var tag=true;
btn.addEventListener("click",function(){
     if(tag==true){
    div1.style.width="0";
    btn.style.width="0";
    div2.style.width="5vw";
    div2.style.height="5vw";
    btn.textContent="";
    btn.style.boxShadow="none";
    tag=false;
     }
     else{
             div1.style.width="6vw";
    btn.style.width="15vw";
    div2.style.width="3vw";
    div2.style.height="3vw";
    btn.textContent="Facebook";
    btn.style.boxShadow="1vw 0 1vw rgb(156, 156, 174)";
      tag=true;
     }
})
 
var div3=document.querySelector("#main #whatapp");
var btn1=document.querySelector("#main  #button2");
var btn2=document.querySelector("#button2 button");
var icon=document.querySelector("#w i");
var div4=document.querySelector("#main #w");
var tag1=true;
btn1.addEventListener("click",function(){
    if(tag1==true){
    div3.style.width="0";
    btn1.style.width="0";
    div4.style.width="5vw";
    div4.style.height="5vw";
    btn1.style.width="0";
    btn1.style.height="0";
    btn2.textContent="";
    btn2.style.boxShadow="none";
    icon.style.fontSize="2vw";
    tag1=false;
    }  
    else{
        div3.style.width="6vw";
    div4.style.width="3vw";
    div4.style.height="3vw";
    btn1.style.width="10vw";
    btn1.style.height="5vw";
    btn2.textContent="Whatsapp";
    btn2.style.boxShadow="1vw 0 1vw rgb(156, 156, 174)";
    icon.style.fontSize="1.7vw";
     tag1=true;
    } 
})
var div5=document.querySelector("#main #yutube");
var btn3=document.querySelector("#main  #button3");
var btn4=document.querySelector("#button3 button");
var icon1=document.querySelector("#y i");
var div6=document.querySelector("#main #y");
var tag2=true;
btn3.addEventListener("click",function(){
    if(tag2==true){
    div5.style.width="0";
    div6.style.width="5vw";
    div6.style.height="5vw";
    btn3.style.width="0";
    btn3.style.height="0";
    btn4.textContent="";
    btn4.style.boxShadow="none";
    icon1.style.fontSize="2vw";
    tag2=false;
    }
    else{
        div5.style.width="6vw";
        div6.style.width="3vw";
        div6.style.height="3vw";
        btn3.style.width="15vw";
        btn3.style.height="4vw";
        btn4.textContent="YouTube";
        btn4.style.boxShadow="1vw 0 1vw rgb(156, 156, 174)";
        icon1.style.fontSize="1.7vw";
        tag2=true;
    }
})
var div7=document.querySelector("#main #snpchat");
var btn5=document.querySelector("#main  #button4");
var btn6=document.querySelector("#button4 button");
var icon2=document.querySelector("#s i");
var div8=document.querySelector("#main #s");
var tag3=true;
btn5.addEventListener("click",function(){
     if(tag3==true){
    div7.style.width="0";
    div8.style.width="5vw";
    div8.style.height="5vw";
    btn5.style.width="0";
    btn5.style.height="0";
    btn6.textContent="";
    btn6.style.boxShadow="none";
    icon2.style.fontSize="2vw";
     tag3=false;
     }
     else{
        div7.style.width="6vw";
        div8.style.width="3vw";
        div8.style.height="3vw";
        btn5.style.width="15vw";
        btn5.style.height="4vw";
        btn6.textContent="Snapchat";
        btn6.style.boxShadow="1vw 0 1vw rgb(156, 156, 174)";
        icon2.style.fontSize="1.7vw";
     }
})
