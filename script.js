function addTask(event){
    event.preventDefault();
    let text=document.getElementById("task_input");
    db.collection("task-items").add({
        text: text.value,
        status: "active"
    })
    text.value="";
}

function getItems(){
    db.collection("task-items").onSnapshot((snapshot) => {
        let items = [];
        snapshot.docs.forEach((doc) => {
            items.push({
                id: doc.id, 
                ...doc.data()
            })
        })
        generateItems(items);
    })
}

function generateItems(items){
    let taskItems = []
    items.forEach((item) => {
        let taskItem = document.createElement("div");
        taskItem.classList.add("task-item");
        let checkBox = document.createElement("div");
        checkBox.classList.add("check_box");
        let checkIndicator = document.createElement("div");
        checkIndicator.classList.add("check_indicator");
        check_indicator.innerHTML = '<img src="image_icon_assets/icon-check.svg">';
        checkIndicator.addEventListener("click", function(){
            markCompleted(item.id);
        })
        checkBox.appendChild(checkIndicator);

        let taskText = document.createElement("div");
        taskText.classList.add("task-text");
        taskText.innerText = item.text;

        if(item.status == "completed"){
            checkIndicator.classList.add("checked");
            taskText.classList.add("checked");
        }
        taskItem.appendChild(checkBox);
        taskItem.appendChild(taskText);
        taskItems.push(taskItem)
    })
    document.querySelector(".task-items").replaceChildren(taskItems);
}



function addItem(event){
    event.preventDefault();
    let text = document.getElementById("task_input");
    let newItem = db.collection("task-items").add({
        text: text.value,
        status: "active"
    })
    text.value = "";
}

function markCompleted(id){
    let item = db.collection("task_items").doc(id);
    item.get().then(function(doc) {
        if (doc.exists) {
            if(doc.data().status == "active"){
                item.update({
                    status: "completed"
                })
            } else {
                item.update({
                    status: "active"
                })
            }
        }
    })
}

getItems();

