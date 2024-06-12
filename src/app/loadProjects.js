
export const loadProjects = (projects) => {
    let container = document.getElementById("container");
    container.innerHTML = "";
    let title = document.createElement("div");
    title.setAttribute('id', 'title');
    title.textContent = "PROJECTS!";
    container.append(title); 
    projects.forEach(function(element,index){
           let newDiv = document.createElement("div");
           newDiv.setAttribute('class','element');
           let titleDiv = document.createElement("div");
           titleDiv.setAttribute('class','element-child');
           titleDiv.textContent = element.name;
           let deleteButton = document.createElement("button");
           deleteButton.setAttribute('class','element-child');  
           deleteButton.textContent = "DELETE";
           newDiv.append(titleDiv);
           newDiv.append(deleteButton);
           container.append(newDiv);
           deleteButton.addEventListener('click',function(){
                projects.splice(index,1);
                loadProjects(projects);
           });
    });
    let newProject = document.createElement('div');
    container.append(newProject);
    newProject.innerText = 'NEW';
    newProject.setAttribute('class', 'new');
    newProject.addEventListener('click', function(){
        let projectName = prompt("Enter new project name!");
        if(projectName != null){
            projects.push(projectName);
            alert("Created!");
            loadProjects(projects);
        }
        else{
            alert("Try again bish!");
        }
    });
}