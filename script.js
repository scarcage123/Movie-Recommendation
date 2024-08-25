

let inp=document.querySelector("input");
let btn=document.querySelector("button");
let container=document.querySelector(".container");
let container_2=document.querySelector(".container_2");
let container_3=document.querySelector(".container_3");
let container_4=document.querySelector(".container_4");
let container_5=document.querySelector(".container_5");
let level_1=document.querySelector(".level_1");
let des=document.querySelector(".des")



document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
    let vid=document.querySelector("video");
    vid.src="avengers1.mp4";
    
    container.style.display = "none";
    des.style.display = "none";

  }

  document.getElementById("myBtn1").addEventListener("click", displayDate1);

function displayDate1() {
    document.getElementById("demo").innerHTML = Date();
    let vid=document.querySelector("video");
    vid.src="harrypotter.mp4";
    
    container.style.display = "none";
    des.style.display = "none";
  }
  document.getElementById("myBtn2").addEventListener("click", displayDate2);

function displayDate2() {
    document.getElementById("demo").innerHTML = Date();
    let vid=document.querySelector("video");
    vid.src="rings1.mp4";
    
    container.style.display = "none";
    des.style.display = "none";
  }
  document.getElementById("myBtn3").addEventListener("click", displayDate3);

function displayDate3() {
    document.getElementById("demo").innerHTML = Date();
    let vid=document.querySelector("video");
    vid.src="rambo.mp4";
    
    container.style.display = "none";
    des.style.display = "none";
  }
  document.getElementById("myBtn4").addEventListener("click", displayDate4);

function displayDate4() {
    document.getElementById("demo").innerHTML = Date();
    let vid=document.querySelector("video");
    vid.src="transformer1.mp4";
    
    container.style.display = "none";
    des.style.display = "none";
  }
  document.getElementById("myBtn5").addEventListener("click", displayDate5);

function displayDate5() {
    document.getElementById("demo").innerHTML = Date();
    let vid=document.querySelector("video");
    vid.src="batman.mp4";
    
    container.style.display = "none";
    des.style.display = "none";
  }

let mouse=document.querySelector("input");
mouse.onmouseenter=function(){
    window.location.reload();
}

inp.addEventListener("change",function(){
   
    if( inp.value == "action"){
    container.style.display="flex"; 
    } 
    else if(inp.value == "adventure"){

    container_2.style.display="flex";
   }
   else if(inp.value == "horror"){

    container_3.style.display="flex";
   }
   else if(inp.value == "anime"){

    container_4.style.display="flex";
   }
   else if(inp.value == "hadoop teacher"){

    container_5.style.display="flex";
   }
   
});






