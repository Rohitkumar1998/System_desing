//button
let button=document.querySelector("button")
//input
let input=document.querySelector("input")
//ui
let ul=document.querySelector("ul") ; 
// tolisten to an event -> and run our logic after that event
button.addEventListener("click",fn)
function fn(){
    let task=input.value;
    if(task){
        // let li=document.createElement("li");
        // li.textContent=task;
        // ul.appendChild(li);
        // input.value="";
        // /input value again clear after  task perform
        taskCreater(task);
        input.value="";
        
    }else{
        alert("enter some Task");
    }

}
function taskCreater(task){
    let div=document.createElement("div")
    let li=document.createElement("li")
    let button=document.createElement("button");
    li.textContent=task;
    button.textContent="X";
    div.appendChild(li);
    div.appendChild(button);
    ul.appendChild(div);
    button.addEventListener("click",function(){
        div.remove();})
}
