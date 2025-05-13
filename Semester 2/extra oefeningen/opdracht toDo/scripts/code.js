const setup = () => {
    restoreColumns();
    document.getElementById("btnReset").addEventListener("click", resetStorage)
    const tasks = document.getElementsByClassName("task");
    const columns = document.getElementsByClassName("column");

    for (let i = 0; i < tasks.length; i++) {
        tasks[i].addEventListener("dragstart", e => {
            //Hier bewaar je de string "dragItem"
            // onder het MIME-type "text/plain" in het dataTransfer-object.
            e.dataTransfer.setData("text/plain", e.target.id);
        });
    }

    for (let i = 0; i < columns.length; i++) {
        columns[i].addEventListener("dragover", e => {
            e.preventDefault(); // zonder dit werkt drop niet
        });

        columns[i].addEventListener("drop", e => {
            e.preventDefault();
            const id = e.dataTransfer.getData("text/plain");
            const draggedElement = document.getElementById(id);
            columns[i].appendChild(draggedElement);
            saveColumns()
        });
    }
}

const saveColumns = () =>{
    let tasksToDo = document.getElementById("todo").getElementsByClassName("task");
    let tasksInProgress = document.getElementById("inprogress").getElementsByClassName("task");
    let tasksDone = document.getElementById("done").getElementsByClassName("task");

    let columnToDo = [];
    let columnInProgress = [];
    let columnDone = [];

    for (let i = 0; i < tasksToDo.length; i++) {
        let task = {
            taskId: tasksToDo[i].id,
            taskText: tasksToDo[i].textContent
        }
        columnToDo.push(JSON.stringify(task));
    }

    for (let i = 0; i < tasksInProgress.length; i++) {
        let task = {
            taskId: tasksInProgress[i].id,
            taskText: tasksInProgress[i].textContent
        }
        columnInProgress.push(JSON.stringify(task));
    }

    for (let i = 0; i < tasksDone.length; i++) {
        let task = {
            taskId: tasksDone[i].id,
            taskText: tasksDone[i].textContent
        }
        columnDone.push(JSON.stringify(task));
    }

    localStorage.setItem("columnToDo", JSON.stringify(columnToDo));
    localStorage.setItem("columnInProgress", JSON.stringify(columnInProgress));
    localStorage.setItem("columnDone", JSON.stringify(columnDone));
}

const restoreColumns = () => {
    let columnToDo = JSON.parse(localStorage.getItem("columnToDo"));
    let columnInProgress = JSON.parse(localStorage.getItem("columnInProgress"));
    let columnDone =  JSON.parse(localStorage.getItem("columnDone"));
    if(columnToDo === null && columnInProgress === null && columnDone === null){
        defaultTasks();
    }
    else{

    let divToDo = document.getElementById("todo");
    for (let i = 0; i < columnToDo.length; i++) {
        divToDo.append(createDivWithIdAndText((JSON.parse(columnToDo[i]).taskId), (JSON.parse(columnToDo[i]).taskText)));
    }

    let divInProgress = document.getElementById("inprogress");
    for (let i = 0; i < columnInProgress.length; i++) {
        divInProgress.append(createDivWithIdAndText((JSON.parse(columnInProgress[i]).taskId), (JSON.parse(columnInProgress[i]).taskText)));
    }

    let divDone = document.getElementById("done");
    for (let i = 0; i < columnDone.length; i++) {
        divDone.append(createDivWithIdAndText((JSON.parse(columnDone[i]).taskId), (JSON.parse(columnDone[i]).taskText)));
    }

    }
}

const resetStorage = () => {
    let empty = JSON.stringify(null);
    localStorage.setItem("columnToDo", empty);
    localStorage.setItem("columnInProgress", empty);
    localStorage.setItem("columnDone", empty);

    //refresh de pagina om gewoon weer opnieuw te beginnen, de elementen removen bracht teveel moeilijkheden
    // daarom koos ik gewoon voor de makelijkere optie.
    location.reload()
}

const createDivWithIdAndText = (taskId, taskText) => {
    let element = document.createElement("div");
    element.className = "task"
    element.id = taskId;
    element.innerHTML = taskText;
    element.draggable = true;
    return element;
}

const defaultTasks = () => {
    let divToDo = document.getElementById("todo");
    divToDo.append(createDivWithIdAndText("task1", "Take out the trash"));
    divToDo.append(createDivWithIdAndText("task2", "Vacuum the house"));
    divToDo.append(createDivWithIdAndText("task3", "Wash the car"));
    divToDo.append(createDivWithIdAndText("task4", "Do the laundry"));
    divToDo.append(createDivWithIdAndText("task5", "Do the dishes"));
}

window.addEventListener("load", setup);