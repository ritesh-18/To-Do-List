const inputbox=document.getElementById("input-1");
const listcontainer=document.getElementById("list-container");

function addtask(){
    if(inputbox.value===''){
        alert("You must write something to add ur task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        //here i am creating cross mark icon after the text
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    inputbox.value="";
}
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);