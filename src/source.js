let container = document.getElementById("container")
import { showprojectpage } from "./projectpage"
export function createHomepage(){
    let newtaskbut = document.createElement("button")
    newtaskbut.textContent = "add task"
    newtaskbut.addEventListener(("click"),() => {showForm(container)})
    let newprojectbut = document.createElement("button")
    newprojectbut.textContent = "add project"
    newprojectbut.addEventListener(("click"), showformproject)
    container.appendChild(newtaskbut)
    container.appendChild(newprojectbut)

function showForm(cont){
    let form = document.createElement("form")
    let name = document.createElement("input")
    name.placeholder = "name of task"
    name.id = "name"
    form.appendChild(name)
    let desc = document.createElement("input")
    desc.id = "desc"
    desc.maxLength = "100"
    desc.placeholder = "description"
    form.appendChild(desc)
    let date = document.createElement("input")
    date.id = date
    date.type = "date"
    form.appendChild(date)
    let prio = document.createElement("input")
    prio.id = "prio"
    prio.type = "checkbox"
    form.append(prio)
    let submitbut = document.createElement("button")
    submitbut.textContent = "submit"
    submitbut.addEventListener(("click"), (e) => {
        e.preventDefault()
        if(name.value != "" && desc.value != "" && date.value != ""){
        createTask(name.value, desc.value, date.value, prio)
        cont.removeChild(form)}
    })
    form.appendChild(submitbut)
    cont.appendChild(form)
}
function showformproject(){
    let form = document.createElement("form")
    let name = document.createElement("input")
    name.id = "name"
    name.placeholder = "name for the project"
    form.appendChild(name)
    let desc = document.createElement("input")
    desc.id = "desc"
    desc.placeholder = "description"
    form.appendChild(desc)
    let submitbut = document.createElement("button")
    submitbut.textContent = "submit"
    submitbut.addEventListener(("click"), (e) =>{
        e.preventDefault()
        if(name.value != "" && desc.value != ""){
            createProject(name.value, desc.value)
            container.removeChild(form)
        }
    })
    form.appendChild(submitbut)
    container.appendChild(form)
}


function createTask(name, desc, date, prio){
    let task = document.createElement("div")
    let namep = document.createElement("h3")
    task.classList.add("task")
    namep.textContent = name
    task.appendChild(namep)
    let descp = document.createElement("p")
    descp.textContent = desc
    task.appendChild(descp)
    let datep = document.createElement("p")
    datep.textContent = date
    task.appendChild(datep)
    container.appendChild(task) 
}


function createProject(name, desc){
    let project = document.createElement("div") 
    let projectname = document.createElement("h1")
    project.classList.add("project")
    projectname.textContent = name
    project.appendChild(projectname)
    let projectdesc = document.createElement("p")
    projectdesc.textContent = desc
    project.appendChild(projectdesc)
    let viewprojectbut = document.createElement("button")
    viewprojectbut.textContent = "viewproject"
    viewprojectbut.addEventListener(("click"), () => {
    showprojectpage(newprojectbut, newtaskbut, container)
})
    project.appendChild(viewprojectbut)
    container.appendChild(project)
}}