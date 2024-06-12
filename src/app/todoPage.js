export const todoPage = (todo, project, index) => {
    let container = document.getElementById('container');
    container.innerHTML = '';
    let heading = document.createElement('div');
    heading.setAttribute('class','heading');
    let bottom = document.createElement('div');
    bottom.setAttribute('class','heading');
    container.append(heading);
    container.append(bottom);
    let title = document.createElement('div');
    let desc = document.createElement('div');
    let time = document.createElement('div');
    let isCompleted = document.createElement('div');
    let prio = document.createElement('div');
    title.innerText = todo.title;
    heading.append(title);
    desc.innerText = todo.desc;
    time.innerText = todo.due_date;
    prio.innerText = todo.priority;
    if(todo.isCompleted){
        isCompleted.innerText = 'Completed!';
    }
    else{
        isCompleted.innerText = 'Yet to finish!';
    }
    heading.append(isCompleted);
    heading.append(prio);
    bottom.append(desc);
    bottom.append(time);
    isCompleted.addEventListener('click',function(){
        project.toggleCompleted(index);
        console.log(todo.isCompleted);
        todoPage(todo, project, index);
    });
}