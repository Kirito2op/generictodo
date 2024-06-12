import "./style.css"

import { createProject } from "./app/createProject";
import { loadProjects } from "./app/loadProjects";
import { loadTodos } from "./app/loadTodos";
let projects = [];

projects.push(createProject("default"));
projects.push(createProject("ez"));
projects[0].addTodo("sleep","i need to sleep soon bruh", "test", 1);

projects = loadProjects(projects);