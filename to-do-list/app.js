const input = document.getElementById('insert-task')
const btn = document.querySelector('button')
const tasksList = document.querySelector('.tasks-list')

function addTask() {
  if (input.value) {
    let newTask = document.createElement('div')
    newTask.classList.add('task')
    
    let text = document.createElement('p')
    text.innerText = input.value
    newTask.appendChild(text)

    let icons = document.createElement('div')
    
    let completeIcon = document.createElement('i')
    completeIcon.classList.add('bi', 'bi-check-circle-fill', 'complete-icon')
    completeIcon.addEventListener('click', completeTask)

    let deleteIcon = document.createElement('i')
    deleteIcon.classList.add('bi', 'bi-trash3-fill', 'delete-icon')
    deleteIcon.addEventListener('click', deleteTask)

    icons.append(completeIcon, deleteIcon)
    newTask.appendChild(icons)

    // Add the new task to the list and remove the text of the input
    tasksList.appendChild(newTask)
    input.value = ""

  } else {
    alert("Please add a task")
  }
}

function completeTask(e) {
  e.target.parentNode.parentNode.classList.toggle('completed-task')
}

function deleteTask(e) {
  let task = e.target.parentNode.parentNode
  task.remove()
}

btn.addEventListener('click', addTask)

input.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    addTask()
  } 
})
