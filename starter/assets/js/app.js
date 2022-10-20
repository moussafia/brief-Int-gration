/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */
let title = document.getElementById('title');
let type = document.querySelector("input[type='radio']:checked");
let Priority = document.querySelector('#Priority');
let Status = document.querySelector('#Status');
let date = document.getElementById('date');
let Description = document.getElementById('Description');
let save = document.getElementById('save');



//create task
let dataScrumBoard;                                       //table pour enregistrer les data
if (localStorage.scrumBoardFile != null) {
    dataScrumBoard = JSON.parse(localStorage.scrumBoardFile);
}
else {
    dataScrumBoard = [];
}


save.onclick = function createTask() {

    let addTask = {
        title: title.value,
        type: type.value,
        Priority: Priority.value,
        Status: Status.value,
        date: date.value,
        Description: Description.value,
        save: save.value,
    }
    dataScrumBoard.push(addTask);

    //enregistrer les data
    localStorage.setItem('scrumBoardFile', JSON.stringify(dataScrumBoard));
    clearInput();
    //affichage dans les tableaux
    window.location.reload();//?

}
function clearInput() {
    title.value = '';
    type.value = '';
    Priority.value = '';
    Status.value = '';
    date.value = '';
    Description.value = '';
}

function ShowTask() {
    let todo = document.getElementById("to-do-tasks");
    let inProgressTasks = document.getElementById("in-progress-tasks");
    let done = document.getElementById("done-tasks");


    for (let i = 0; i < dataScrumBoard.length; i++) {
        if (dataScrumBoard[i].Status == 'TO-do') {
            todo.innerHTML +=
                `<button class="btn btn-outline-dark col-12">
								<div>
									<div class="text-start fw-bolder"><i class="bi bi-question-circle-fill"></i> ${dataScrumBoard[i].title}</div>
									<div>
										<div class="fw-lighter">#1 created in ${dataScrumBoard[i].date}</div>
										<div class="fst-italic">${dataScrumBoard[i].Description}</div>
									</div>
									<div>
										<span class="rounded-2 text-black bg-info">${dataScrumBoard[i].Priority}</span>
										<span class="rounded-2 border border-white bg-secondary text-white">${dataScrumBoard[i].type}</span>
									</div>
								</div>
							</button>`
        }
        else if (dataScrumBoard[i].Status == 'In-progress') {
            inProgressTasks.innerHTML +=

                `<button class="btn btn-outline-dark col-12">
								<div>
									<div class="text-start fw-bolder"><i class="bi bi-question-circle-fill"></i> ${dataScrumBoard[i].title}</div>
									<div>
										<div class="fw-lighter">#1 created in ${dataScrumBoard[i].date}</div>
										<div class="fst-italic">${dataScrumBoard[i].Description}</div>
									</div>
									<div>
										<span class="rounded-2 text-black bg-info">${dataScrumBoard[i].Priority}</span>
										<span class="rounded-2 border border-white bg-secondary text-white">${dataScrumBoard[i].type}</span>
									</div>
								</div>
							</button>`
        }
        else if (dataScrumBoard[i].Status == 'Done') {
            done.innerHTML +=
                `<button class="btn btn-outline-dark col-12">
								<div>
									<div class="text-start fw-bolder"><i class="bi bi-question-circle-fill"></i> ${dataScrumBoard[i].title}</div>
									<div>
										<div class="fw-lighter">#1 created in ${dataScrumBoard[i].date}</div>
										<div class="fst-italic">${dataScrumBoard[i].Description}</div>
									</div>
									<div>
										<span class="rounded-2 text-black bg-info">${dataScrumBoard[i].Priority}</span>
										<span class="rounded-2 border border-white bg-secondary text-white">${dataScrumBoard[i].type}</span>
									</div>
								</div>
							</button>`
        }
    }
}
ShowTask();

function editTask(index) {
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks

}

function deleteTask() {


}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}