const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");

function addTask() {
    const task = inputBox.value.trim();


    if (!task) {
        alert("You must write something");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = '<i class="fa-solid fa-trash"></i>';
    li.appendChild(span);

    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    const li = e.target.closest("li");
    if (!li) return;

    if (e.target.closest("span")) {
        li.remove();
    } else {
        li.classList.toggle("checked");
    }

    saveData();
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    const data = localStorage.getItem("data");
    if (data) {
        listContainer.innerHTML = data;
    }
}

showTask();
