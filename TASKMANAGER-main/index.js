let textbar = document.querySelector(".textbar");
let addbtn = document.querySelector(".btn");
let tasklist = document.querySelector(".tasklist");
let container = document.querySelector(".container");

function adjustContainerHeight() {
    container.style.minHeight = tasklist.scrollHeight + "px";
}

function addTask() {
    let val = textbar.value.trim();
    if (val !== "") {
        textbar.value = "";

        let task = document.createElement("div");
        task.classList.add("task");

        let ipval = document.createElement("input");
        ipval.value = val;
        ipval.disabled = true;

        task.append(ipval);
        let editbtn = document.createElement("button");
        editbtn.textContent = "Edit";
        editbtn.classList.add("edit");

        let del = document.createElement("button");
        del.textContent = "Delete";
        del.classList.add("del");

        del.addEventListener("click", () => {
            task.style.display = "none";
            adjustContainerHeight();
        });

        editbtn.addEventListener("click", () => {
            if (editbtn.textContent === "Edit") {
                ipval.disabled = false;
                editbtn.style.fontSize = "0.8rem";
                editbtn.textContent = "Save";
            } else {
                editbtn.textContent = "Edit";
                ipval.disabled = true;
            }
        });

        task.append(editbtn);
        task.append(del);
        tasklist.append(task);
        adjustContainerHeight();
    }
}

addbtn.addEventListener("click", () => {
    addTask();
});

textbar.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
        event.preventDefault();
    }
});
