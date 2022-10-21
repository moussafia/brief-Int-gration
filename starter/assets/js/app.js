    const form =document.forms['task'];
    let save = document.getElementById('save');
    let index;

//create task
let dataScrumBoard;         //table pour enregistrer les data
if (localStorage.scrumBoardFile != null) {
    dataScrumBoard = JSON.parse(localStorage.scrumBoardFile);
}
else {
    dataScrumBoard = [];
}
        tasksCount();
        ShowTask();

save.onclick = function createTask() {
    
    let addTask = {
        title: form.title.value,
        type: form.type.value,
        Priority: form.Priority.value,
        Status: form.Status.value,
        date: form.date.value,
        Description: form.Description.value,
    }
    dataScrumBoard.push(addTask);

    //enregistrer les data
    localStorage.setItem('scrumBoardFile', JSON.stringify(dataScrumBoard));
   //reset inputs
            form.reset();
            ShowTask();

    //affichage dans les tableaux

   ///reloading page


}
function tasksCount(){
    let DO_count=0,iP_count=0,Done_count=0;
    for(i=0;i<dataScrumBoard.length;i++)
    {
        if(dataScrumBoard[i].Status=='TO-do')
            DO_count++;
        else if(dataScrumBoard[i].Status=='In-progress')
            iP_count++;
        else if (dataScrumBoard[i].Status == 'Done')
            Done_count++
    }
    console.log(Done_count);
    document.getElementById('to-do-tasks-count').innerHTML = "(" + DO_count +")" ;
    document.getElementById('in-progress-tasks-count').innerHTML= "(" + iP_count +")";
    document.getElementById('done-tasks-count').innerHTML= "(" + Done_count +")";

}

function ShowTask() {
    let todo = document.getElementById("to-do-tasks");
    let inProgressTasks = document.getElementById("in-progress-tasks");
    let done = document.getElementById("done-tasks");


    for (let i = 0; i < dataScrumBoard.length; i++) {
        if (dataScrumBoard[i].Status == 'TO-do') {
            todo.innerHTML +=
                `<button editTask(${i}) class="btn btn-outline-dark" col-12>
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

                `<button class="btn btn-outline-dark" col-12>
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
                `<button class="btn btn-outline-dark" col-12>
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


function editTask(index) {

    console.log(index);

    // Ouvrir Modal form
}
function updateTask() {
   
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