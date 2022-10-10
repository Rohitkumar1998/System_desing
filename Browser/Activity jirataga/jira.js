let allcolor=document.querySelectorAll(".color");
let main = document.querySelector(".main");
for(let i=0;i<allcolor.length;i++){
    allcolor[i].addEventListener("click",changeColor);
}
function changeColor(e){
    // console.log(e);
    // e.currentTarget -> refer the element on which event has occured
    let elem=e.currentTarget;
    let allclasses=elem.classList;
    let color=allclasses[1];
    console.log(color);
    main.style.backgroundColor=color;
}
