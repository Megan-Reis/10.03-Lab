
// This function will be called when the link is clicked
// It shows an alert with a message
// Ensure the DOM is fully loaded before attaching the event listener


document.addEventListener('DOMContentLoaded', function() {
    const existingButtons = document.querySelectorAll(".done-btn");
    existingButtons.forEach(button => {
        button.addEventListener("click", removeTask);
    });
    list.addEventListener('submit',addBtnClick);

    function addBtnClick(event){
        event.preventDefault();
        console.log("adsf");
        
        let taskInput = document.getElementById("task").value;
        if(taskInput!=""){
            addTask(taskInput);
            document.getElementById("task").value= "";
            document.getElementById("task").focus();
        }



    }
    

    

    function addTask(TASK){
        const task = document.createElement("li");
        task.innerHTML = `<span class="task-text">${TASK}</span><button class="done-btn">&#10006;</button>`;
        document.querySelector("ol").appendChild(task);

        const doneButtons = document.querySelectorAll(".done-btn");
        doneButtons[doneButtons.length - 1].addEventListener("click", removeTask);
    } 

    function removeTask(event){
        let listItem = event.target.parentNode;
        let list = listItem.parentNode;
        list.removeChild(listItem);
    }
});

