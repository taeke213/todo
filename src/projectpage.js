let projcont = document.createElement("div")
let firsttime = true
export function showprojectpage(button1, button2, container){
    button1.style.display = "none"
    button2.style.display = "none"
    container.style.display = "none"
    projcont.style.display = "inline"
    if(firsttime){
        back(button1,button2,container)
        var addtaskbut = document.createElement("button")
        addtaskbut.textContent = "add task"
        addtaskbut.addEventListener(("click"), () => {
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
            projcont.removeChild(form)}})
            form.appendChild(submitbut)
            projcont.appendChild(form)
        })
        projcont.appendChild(addtaskbut)
        firsttime = false
}

   
    document.body.appendChild(projcont)
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
    projcont.appendChild(task) 
}
function back(x,y,z){
    let backbut = document.createElement("button")
    backbut.textContent = "back"
    backbut.addEventListener(("click"), () => {
        showHomepage(x,y,z)
    })
    projcont.appendChild(backbut)
}
function showHomepage(button1, button2, cont){
    projcont.style.display = "none";
    button1.style.display = "inline";
    button2.style.display = "inline";
    cont.style.display = "inline"
}