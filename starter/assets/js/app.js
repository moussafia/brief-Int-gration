    const form =document.forms['task'];
    let save = document.getElementById('save');
    let Update = document.getElementById('Update');
    let delet = document.getElementById('delete');
    let tmp;

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

    function hideButtom(){
        document.getElementById("Update").style.display = "none";
        document.getElementById("delete").style.display = "none";
        document.getElementById("save").style.display = "block";
    }

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
    document.getElementById('to-do-tasks-count').innerHTML = "(" + DO_count +")" ;
    document.getElementById('in-progress-tasks-count').innerHTML= "(" + iP_count +")";
    document.getElementById('done-tasks-count').innerHTML= "(" + Done_count +")";

}

function ShowTask() {
    let todo = document.getElementById("to-do-tasks");
    let inProgressTasks = document.getElementById("in-progress-tasks");
    let done = document.getElementById("done-tasks");

    todo.innerHTML = '';
    inProgressTasks.innerHTML = '';
    todo.innerHTML = '';

    for (let i = 0; i < dataScrumBoard.length; i++) {
        if (dataScrumBoard[i].Status == 'TO-do') {
            todo.innerHTML +=
                `<button onclick='editTask(${i})' class="btn btn-outline-dark col-12  "  data-bs-toggle="modal" data-bs-target="#add-task">
								<div>
									<div class="text-start fw-bolder"><i class="bi bi-question-circle-fill"></i> ${dataScrumBoard[i].title}</div>
									<div>
										<div class="fw-lighter">#${i} created in ${dataScrumBoard[i].date}</div>
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

                `<button onclick='editTask(${i})' class="btn btn-outline-dark col-12" data-bs-toggle="modal" data-bs-target="#add-task">
								<div>
									<div class="text-start fw-bolder"><i class="bi bi-question-circle-fill"></i> ${dataScrumBoard[i].title}</div>
									<div>
										<div class="fw-lighter">#${i} created in ${dataScrumBoard[i].date}</div>
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
                `<button onclick='editTask(${i})' class="btn btn-outline-dark col-12" data-bs-toggle="modal" data-bs-target="#add-task">
								<div>
									<div class="text-start fw-bolder"><i class="bi bi-question-circle-fill"></i> ${dataScrumBoard[i].title}</div>
									<div>
										<div class="fw-lighter">#${i} created in ${dataScrumBoard[i].date}</div>
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
    document.getElementById("save").style.display = "none";
    document.getElementById("Update").style.display = "block";
    document.getElementById("delete").style.display = "block";
    
    

    form.title.value=dataScrumBoard[index].title;
    form.type.value=dataScrumBoard[index].type;
    form.Priority.value=dataScrumBoard[index].Priority;
    form.Status.value=dataScrumBoard[index].Status;
    form.date.value=dataScrumBoard[index].date;
    form.Description.value=dataScrumBoard[index].Description;
    
    tmp = index;
    
    

    // Ouvrir Modal form
}
function updateTask() {
    
    dataScrumBoard[tmp].title=form.title.value;
    dataScrumBoard[tmp].type=form.type.value;
    dataScrumBoard[tmp].Priority=form.Priority.value;
    dataScrumBoard[tmp].Status=form.Status.value;
    dataScrumBoard[tmp].date=form.date.value;
    dataScrumBoard[tmp].Description=form.Description.value;
    localStorage.scrumBoardFile=JSON.stringify(dataScrumBoard);


    ShowTask();
}

function deleteTask() {

    dataScrumBoard.splice(tmp,1);
    localStorage.scrumBoardFile=JSON.stringify(dataScrumBoard);
    ShowTask();
    console.log(tmp);

}

function initTaskForm() {
   localStorage.clear();
   splice(0);
   ShowTask();
}

