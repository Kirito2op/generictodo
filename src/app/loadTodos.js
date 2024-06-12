import { todoPage } from "./todoPage";

export function loadTodos(project){
    let todos = project.getTodos();
    let name = project.name;
    let container = document.getElementById("container");
    container.innerHTML = "";
    let title = document.createElement("div");
    title.setAttribute('id', 'title');
    title.textContent = `Todos of project ${name} !`;
    container.append(title); 
    todos.forEach(function(element,index){
        let newDiv = document.createElement("div");
           newDiv.setAttribute('class','element');
           let titleDiv = document.createElement("div");
           titleDiv.setAttribute('class','element-child');
           titleDiv.textContent = element.title;
           let deleteButton = document.createElement("button");
           deleteButton.setAttribute('class','element-child');  
           deleteButton.textContent = "DELETE";
           newDiv.append(titleDiv);
           newDiv.append(deleteButton);
           container.append(newDiv);
           deleteButton.addEventListener('click',function(){
                project.deleteTodo(index);
                loadTodos(project);
           });
           titleDiv.addEventListener('click',function(){
                todoPage(element,project,index);
           })
    });
}