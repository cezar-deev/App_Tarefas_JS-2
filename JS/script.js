
// Função que adiciona tarefa 
function addtask() {

    //titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;
    
    

}


// Evento de adicionar Tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e) {

  //Aguarda uma ação a ser feita no Formulario  
  e.preventDefault();

  addtask();

});