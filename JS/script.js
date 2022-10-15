
// Função que adiciona tarefa 
function addtask() {

    // titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;
    
    if(taskTitle) {

        // clonar template
        const template = document.querySelector(".template");
        const newTask = template.cloneNode(true);

        // Adicona titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        // remover as classes desnecessárias
        newTask.classList.remove("template")
        newTask.classList.remove("hide")

        // adicionar tarefa na lista
        const list =  document.querySelector("#task-list");
        list.appendChild(newTask)

        // adicionar o evento de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {
            removeTask(this);
        });
        
        // limpar texto
        document.querySelector("#task-title").value = "";
    }

}

// função de remover tarefa
function removeTask (task) {
    console.log(task);
}




// Evento de adicionar Tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e) {

  //Aguarda uma ação a ser feita no Formulario  
  e.preventDefault();

  addtask();

});