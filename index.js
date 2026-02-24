constconst inputBox=document.getElementById("inputBox");
const listContainer=document.getElementById("listContainer");

function addTask(){
    if(inputBox.value===''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        
        let span= document.createElement("span");
        span.innerHTML='<i class="fa-solid fa-trash"></i>';
        li.appendChild(span);
    }

    inputBox.value="";
    saveData()
}

listContainer.addEventListener("click", function(e){

    if(e.target.closest("li") && !e.target.closest("span")){
        e.target.closest("li").classList.toggle("checked");
        saveData()
    }

    if(e.target.closest("span")){
        e.target.closest("li").remove();
        saveData()
    }

});

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);

}
function showTask(){
    const savedData = localStorage.getItem("data");
    if(savedData){
        listContainer.innerHTML = savedData;
    }
}
showTask();

