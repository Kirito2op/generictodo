export function createProject(name){
    let todos = [];
    const addTodo = (title, desc, due_date, priority) => {
        let isCompleted = 0;
        todos.push({title, desc, due_date, priority, isCompleted});
    }
    const deleteTodo = (positon) => {
        if(positon<todos.length){
            todos.splice(positon,1);
        }
    }
    const toggleCompleted = (positon) => {
        todos[positon].isCompleted ^= 1;
    }
    const getTodos = () => todos;
    return { name, addTodo, deleteTodo, getTodos, toggleCompleted};    
}