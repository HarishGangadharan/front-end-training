var doc : Document = document;
var listId : number = 0;
var taskId : number = 0;
var itemLists : List[] = [];
const click : string = "click";

class List {
   private id: string;
   private listName :string;
   private  tasks: Task[] = [];

   public getId() : string {
       return this.id;
   }
   public setId(id: string) :void {
       this.id = id;
   }

   public getListName() : string {
    return this.listName;
}
public setListName(listName: string) :void {
    this.listName = listName;
}


public getTasks() : Task[] {
    return this.tasks;
}
public setTasks(tasks: Task[]) :void {
    this.tasks = tasks;
}


}


class Task {
    private  id: string;
    private   taskName: string;
    private  isSelected: boolean;
    private isStarred: boolean;
    private  remindDate: string;
    private   dueDate: string;
    private hint: string;
  
    public getId() : string{
       return this.id;
    }
    public setId(id :string) :void {
        this.id = id;
    }
    public getTaskName() : string{
        return this.taskName;
     }
     public setTaskName(taskName :string) :void {
         this.taskName = taskName;
     }


     public getTaskSelected() : boolean{
        return this.isSelected;
     }
     public setTaskSelected(isSelected :boolean) :void {
         this.isSelected = isSelected;
     }

     public getTaskStarred() : boolean{
        return this.isStarred;
     }
     public setTaskStarred(isStarred :boolean) :void {
         this.isStarred = isStarred;
     }


     public getRemindDate() : string{
        return this.remindDate;
     }
     public setRemindDate(remindDate :string) :void {
         this.remindDate = remindDate;
     }

     public getDueDate() : string{
        return this.dueDate;
     }
     public setDueDate(dueDate :string) :void {
         this.dueDate = dueDate;
     }

     public getHint() : string{
        return this.hint;
     }
     public setHint(hint :string) :void {
         this.hint = hint;
     }

}


/**
 * Add a event listener to the element.
 * @param {classname of the element} className
 * @param {event name} event
 * @param {function name} functionName
 */
function addEventListener(className, event, functionName) : void {
    var elements = getAllElementsByClassName(className);
    for (let index = 0; index < elements.length; index++) {
        elements[index].addEventListener(event, functionName);
    }
}

/**
 * Obtains all the element of the specified classname.
 * @param {classname of the element.} className
 */
function getAllElementsByClassName(className) : any{
    return doc.getElementsByClassName(className);
}

/**
 * Obtains  the element of the specified id.
 * @param {id of the element.} className
 */
function getElementById(elementId) : any {
    return doc.getElementById(elementId);
}

/**
 * show the date picker to select the remind date.
 */
function pickshowRemindDateToSelectDate() {
    var date  =(<HTMLInputElement> getElementsByClassName("date-picker"));
    var today = new Date()
    date.min = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    makeDisplayBlock("date-picker");
}

/**
 * set the reminder date.
 * @param {task object} task
 */
function setRemindDate(task)  : void {
    var text = getElementsByClassName("remind-me-value");
    if (null != task.getRemindDate()) {
        text.innerHTML = task.getRemindDate();
    } else {
        text.innerHTML = "Remind me";
    }
}

/**
 * add the remind date to the task.
 * @param {event} e
 */
function addRemindDate(e) : void {
    if (e.target.value != null) {
        var rightContent = getElementsByClassName("right-nav-bar");
        var listId = getElementsByClassName("new-content").id;
        var listItem = getElementByListId(listId);
        var task = getElementByTaskId(listItem, rightContent.id);
        var dateValue = e.target.value;
        task.setRemindDate(dateValue);
        makeDisplayNone("date-picker");
        setRemindDate(task);
    }
}

/**
 * show the date picker to select the due date.
 */
function pickshowDueDateToSelectDate() : void{
        var date = <HTMLInputElement>getElementsByClassName("due-date-picker");
        var today = new Date()
        date.min = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
        makeDisplayBlock("due-date-picker");
    }
    /**
     * set the due date.
     * @param {task object} task
     */
function setDueDate(task): void {
        var text = getElementsByClassName("due-date-value");
        if (null != task.getDueDate()) {
            text.innerHTML = task.getDueDate();
        } else {
            text.innerHTML = "Due date";
        }
    }
    /**
     * add the due date to the task.
     * @param {event} e
     */
function addDueDate(e) : void {
    if (e.target.value != null) {
        var rightContent = getElementsByClassName("right-nav-bar");
        var listId = getElementsByClassName("new-content").id;
        var listItem = getElementByListId(listId);
        var task = getElementByTaskId(listItem, rightContent.id);
        var dateValue = e.target.value;
        task.setDueDate(dateValue);
        makeDisplayNone("due-date-picker");
        setDueDate(task);
    }
}

/**
 * set the task hint.
 * @param {task object} task
 */
function setTaskHint(task) : void {
        var textArea =<HTMLInputElement> getElementsByClassName("textarea-content");
        if (null != task.getHint()) {
            textArea.value = task.getHint();
        } else {
            textArea.value = "";
        }
    }
    /**
     * Add a hint to the particular task.
     * @param {event } e
     */
function addTaskHint(e) : void {
    var rightContent = getElementsByClassName("right-nav-bar");
    var listId = getElementsByClassName("new-content").id;
    var listItem = getElementByListId(listId);
    var task = getElementByTaskId(listItem, rightContent.id);
    task.setHint(e.target.value);
    setTaskHint(task);
}

/**
 * Init function
 */
function init() : void {

    var inputTask = <HTMLInputElement>getElementsByClassName("input-type");
    inputTask.addEventListener("keydown", function e(e : KeyboardEvent) {
        if (e.keyCode == 13) {
            createTask(e);
        }
    });

   inputTask.addEventListener("focusout", function hideAddTask(e) {
        if (inputTask.value != '') {
            createTask(e);
        } else {
            closeTask();
        }
    });

    var listNameInput = <HTMLInputElement>getElementsByClassName("add-list-name");
    listNameInput.addEventListener("keydown", function e(e : KeyboardEvent) {
        if (e.keyCode == 13) {
            if (listNameInput.value != '') {
                createNewList(e);
            }
        }
    });

    listNameInput.addEventListener("focusout", function hideAddTask(e) {
        if (listNameInput.value != '') {
            createNewList(e);
        } else {
            hideAddListName();
        }
    });


    getElementsByClassName("delete-icon").addEventListener(click, deleteTask);
    getElementsByClassName("next-icon").addEventListener(click, closeRightNavBar);
    getElementsByClassName("add-task").addEventListener(click, showCreateTask);
    getElementsByClassName("fa fa-bars").addEventListener(click, manageSideNav);
    getElementsByClassName("add-button").addEventListener(click, createTask);
    getElementsByClassName("new-list").addEventListener(click, showNewListInput);
    getElementsByClassName("add-name-button").addEventListener(click, createNewList);
    getElementsByClassName("fa fa-trash").addEventListener(click, deleteList);
    getElementsByClassName("remind-me-value").addEventListener(click, pickshowRemindDateToSelectDate)
    getElementsByClassName("date-picker").addEventListener("focusout", addRemindDate);
    getElementsByClassName("due-date-picker").addEventListener("focusout", addDueDate);
    getElementsByClassName("due-date-value").addEventListener(click, pickshowDueDateToSelectDate)
    getElementsByClassName("textarea-content").addEventListener("focusout", addTaskHint);

}

init();



/**
 * make the task important
 * @param {event} e
 */
function makeTaskSelected(e): void {
    var listId = getElementsByClassName("new-content").id;
    var listItem = getElementByListId(listId);
    var task = getElementByTaskId(listItem, e.target.parentElement.id);
    if (task.isSelected) {
        task.isSelected = false;
    } else {
        task.isSelected = true;
    }
    setId(task.id, getElementsByClassName("right-nav-bar"));
    getElementsByClassName("content").innerHTML = task.taskName;
    makeDisplayBlock("right-nav-bar");
    changeSelectIcon(task);
    if (e.currentTarget.classList.contains("fa-circle-o")) {
        e.currentTarget.classList.replace("fa-circle-o", "fa-check-circle");
    } else {
        e.currentTarget.classList.replace("fa-check-circle", "fa-circle-o");
    }
}


/**
 * make the task important
 * @param {event} e
 */
function makeTaskStarred(e) : void {
    var listId = getElementsByClassName("new-content").id;
    var listItem = getElementByListId(listId);
    var task = getElementByTaskId(listItem, e.target.parentElement.id);
    if (task.isStarred) {
        task.isStarred = false;
    } else {
        task.isStarred = true;
    }
    setId(task.id, getElementsByClassName("right-nav-bar"));
    getElementsByClassName("content").innerHTML = task.taskName;
    makeDisplayBlock("right-nav-bar");
    changeStarIcon(task);
    if (e.currentTarget.classList.contains("fa-star-o")) {
        e.currentTarget.classList.replace("fa-star-o", "fa-star");
    } else {
        e.currentTarget.classList.replace("fa-star", "fa-star-o");
    }
}


/**
 * Delete a list from the entire lists.
 * @param {event} event
 */
function deleteList(event): void {
    var listItem = getElementByListId(event.target.id);
    var listsContent = getElementsByClassName("newly-added-list");
    var deletedList = getElementById(listItem.id);
    for (let index = 0; index < itemLists.length; index++) {
        if (itemLists[index].getId() == listItem.id) {
            itemLists.splice(index, 1);
        }
    }
    listsContent.removeChild(deletedList);
    getElementsByClassName("my-list-label").innerHTML = "My List";
    makeDisplayNone("fa fa-trash");
    removeTaskContent();
    closeTask();
}

/**
 * Remove all the task content present.
 */
function removeTaskContent() : void {
    var taskContent = doc.getElementsByClassName("task-content");
    var main = getElementsByClassName("new-content");
    for (let index = 0; index < taskContent.length; index++) {
        if (taskContent[index].parentElement.className == "new-content") {
            main.removeChild(taskContent[index]);
            index--;
        }
    }
}

/**
 * Make the task selected based on the flag present.
 * @param {task object} task
 */
function markSelected(task): void {
    var unMarkedIcon = getElementsByClassName(" fa fa-circle-o color opacity");
    var MarkedIcon = getElementsByClassName(" fa fa-check-circle color opacity");
    if (task.isSelected) {
        if (unMarkedIcon) {
            setClassName("fa fa-check-circle color opacity", unMarkedIcon);
        }
    } else {
        if (MarkedIcon) {
            setClassName("fa fa-circle-o color opacity", MarkedIcon);
        }
    }
}


/**
 * Make the task select from the entire tasks.
 * @param {list of task} tasks
 */
function makeTaskStar(tasks) : void {
    var unMarkedIcon = doc.getElementsByClassName("fa fa-star-o starred ");
    var MarkedIcon = doc.getElementsByClassName("fa fa-star starred ");
    for (let index = 0; index < tasks.length; index++) {
        if (tasks[index].getTaskStarred()) {
            alert(tasks[index].getTaskStarred());
            if (unMarkedIcon[index]) {

                setClassName("fa fa-star starred ", unMarkedIcon[index]);
            }
        } else {
            if (MarkedIcon[index]) {
                setClassName("fa fa-star-o starred ", unMarkedIcon[index]);
            }
        }
    }
}

/**
 * Make the task select from the entire tasks.
 * @param {list of task} tasks
 */
function makeTaskSelect(tasks) : void {
    var unMarkedIcon = doc.getElementsByClassName("fa fa-circle-o color aa");
    var MarkedIcon = doc.getElementsByClassName("fa fa-check-circle color aa");
    for (let index = 0; index < tasks.length; index++) {
        if (tasks[index].isSelected) {
            if (unMarkedIcon[index]) {

                setClassName("fa fa-check-circle color aa", unMarkedIcon[index]);
            }
        } else {
            if (MarkedIcon[index]) {
                setClassName("fa fa-check-circle color aa", MarkedIcon[index]);
            }
        }
    }
}

/**
 * Display a particular list by the specified list id.
 * @param {event} event
 */
function displaySelectedList(event) : void {
    makeDisplayNone("right-nav-bar");
    var listId = event.target.id;
    var listItem = getElementByListId(listId);
    getElementsByClassName("my-list-label").innerHTML = (listItem.listName);
    setId(listId, getElementsByClassName("new-content"));
    setId(listId, getElementsByClassName("fa fa-trash"));
    makeDisplayInlineBlock("fa fa-trash");
    removeTaskContent();
    var main = getElementsByClassName("new-content");
    var message = getAllElementsByClassName("message");
    if (listItem.tasks.length > 0) {
        for (let index = 0; index < listItem.tasks.length; index++) {
            main.innerHTML += '<div class="task-content" id = ' + listItem.tasks[index].id + '><i class="fa fa-circle-o color aa" id = ' + listItem.tasks[index].id + '></i><p class="message" id= ' + listItem.tasks[index].id + '>' + listItem.tasks[index].taskName + '</p><i class="fa fa-star-o starred"></i></div>';
        }
        makeTaskSelect(listItem.tasks);
        makeTaskStar(listItem.tasks);


        addEventListener("message", click, openRightContent);
        addEventListener("fa fa-circle-o", click, makeTaskSelected);
        addEventListener("fa fa-star-o", click, makeTaskStarred);

    }
}


/**
 * show the input box to add new list.
 */
function showNewListInput() : void {
    makeDisplayNone("new-list");
    makeDisplayInlineBlock("add-name-button");
    makeDisplayBlock("list-name");
    (<HTMLInputElement>getElementsByClassName("add-list-name")).focus();
}

/**
 * hide the input box which helps to add new list.
 */
function hideAddListName() : void {
    makeDisplayNone("list-name");
    makeDisplayInline("new-list");
}


/**
 * Obtains the first element with the specified class name/
 * @param {class name of the element} className
 */
function getElementsByClassName(className) : any {
    return doc.getElementsByClassName(className)[0];
}

/**
 * creates a new list.
 */
function createNewList(e) : void {
    var list = new List();
    list.setId("list" + ++listId);
    var listContent = getElementsByClassName("newly-added-list");
    var textValue : string = (<HTMLInputElement>getElementsByClassName("add-list-name")).value;
    list.setListName(textValue);
    var newLi = createElement("li");
    var newAnchor = createElement("a");
    var newIcon = createElement("i");
    var newPara = createElement("p");
    setClassName("label-my-list content-data", newPara);
    setClassName(" fa fa-list-ul icon-my-list icons-size", newIcon);
    newAnchor.appendChild(newIcon);
    newAnchor.appendChild(newPara);
    var node = doc.createTextNode(textValue);
    newPara.appendChild(node);
    setClassName("list-icon", newLi);
    (<HTMLInputElement> getElementsByClassName("add-list-name")).focus();
    (<HTMLInputElement> getElementsByClassName("add-list-name")).value = "";
    newLi.appendChild(newAnchor);
    listContent.appendChild(newLi);
    setId(list.getId(), newLi);
    itemLists.push(list);
    newLi.addEventListener(click, displaySelectedList);
}


/**
 * delete a task from the list.
 */
function deleteTask() : void {
    var ele = getElementsByClassName("active").parentNode;
    var main = getElementsByClassName("new-content");
    var taskContent = getElementsByClassName("right-nav-bar");
    var listItem = getElementByListId(main.id);
    var task = getElementByTaskId(listItem, taskContent.id);
    for (let index = 0; index < listItem.tasks.length; index++) {
        if (listItem.tasks[index].id == task.id) {
            listItem.tasks.splice(index, 1);
        }
    }
    main.removeChild(ele);
    makeDisplayNone("right-nav-bar");
}

/**
 * Helps to find a list from the specified list id.
 * @param {list id to be found} listId
 */
function getElementByListId(listId)  {
    var element;
    for (let index = 0; index < itemLists.length; index++) {
        if (listId == itemLists[index].getId()) {
            element = (itemLists[index]);
        }
    }
    return element;
}


/**
 * Search a particular task from the list with the specified task id.
 * @param {list object} list
 * @param {task id to be searched from the list} taskId
 */
function getElementByTaskId(list , taskId) {
    var task;
    for (let index = 0; index < list.tasks.length; index++) {
        if (list.tasks[index].id == taskId) {
            task = list.tasks[index];
        }
    }
    return task;
}



/**
 * Create a new task.
 * @param {event} event
 */
function createTask(event) : void {
    var task = new Task();
    task.setId("task" + ++taskId);
  
    var textValue : string =(<HTMLInputElement> getElementsByClassName("input-type")).value;
    if (textValue != "") {
        var divContent = getElementsByClassName("new-content");
        var newDiv = createElement("div");
        var newSelectIcon = createElement("i");
        var newStarIcon = createElement("i");
        var para = createElement("p");
        setClassName("task-content", newDiv);
        setClassName("fa fa-circle-o color aa", newSelectIcon);
        setClassName("message", para);
        setClassName("fa fa-star-o starred", newStarIcon);
        var node = doc.createTextNode(textValue);
        para.appendChild(node);
        newDiv.appendChild(newSelectIcon);
        newDiv.appendChild(newStarIcon);
        newDiv.appendChild(para);
        divContent.appendChild(newDiv);
        (<HTMLInputElement>getElementsByClassName("input-type")).value = "";
        (<HTMLInputElement>getElementsByClassName("input-type")).focus();
        para.addEventListener(click, openRightContent);
        newSelectIcon.addEventListener(click, makeTaskSelected);
        newStarIcon.addEventListener(click, makeTaskStarred);

        setId(task.getId(), newSelectIcon);
        setId(task.getId(), para);
        setId(task.getId(), newDiv);
        task.setTaskName(textValue);
        for (let index = 0; index < itemLists.length; index++) {
            if (divContent.id == itemLists[index].getId()) {
                itemLists[index].getTasks().push(task);
            }
        }
    }
}

/**
 * toggle the side navigation bar.
 */
function manageSideNav() : void{
    var x = (<HTMLInputElement> getElementsByClassName("side-nav-bar"));
    var listData = doc.getElementsByClassName("content-data");
    if (x.style.width == "21%") {
        (<HTMLInputElement>getElementsByClassName("side-nav-bar")).style.width = "4%";
        (<HTMLInputElement>getElementsByClassName("main-content")).style.width = "96%";
        for (let index = 0; index < listData.length; index++) {
            (<HTMLInputElement>doc.getElementsByClassName("content-data")[index]).style.display = 'none';
        }
    } else {
        for (let index = 0; index < listData.length; index++) {
            (<HTMLInputElement>doc.getElementsByClassName("content-data")[index]).style.display = 'inline';
        }
        x.style.width = "21%";
    }
}


/**
 * make the select icon change to checked.
 * @param {task object} task
 */
function changeSelectIcon(task) : void {
    var unCheckedIcon = getElementsByClassName("fa fa-circle-o color opacity");
    var selectedIcon = getElementsByClassName("fa fa-check-circle color opacity");
    var rightContent = getElementsByClassName("right-nav-bar");
    if (task.isSelected && rightContent.id == task.id) {
        if (unCheckedIcon) {
            setClassName("fa fa-check-circle color opacity", unCheckedIcon);
        }
    } else {
        if (selectedIcon) {
            setClassName(" fa fa-circle-o color opacity", selectedIcon);
        }
    }
}


/**
 * make the select icon change to checked.
 * @param {task object} task
 */
function changeStarIcon(task) : void {
    var unCheckedIcon = getElementsByClassName("fa fa-star-o starred opacity");
    var selectedIcon = getElementsByClassName("fa fa-star starred opacity");
    var rightContent = getElementsByClassName("right-nav-bar");
    alert(task.isStarred);

    if (task.isStarred) {
        if (unCheckedIcon) {
            setClassName("fa fa-star starred opacity", unCheckedIcon);
        }
    } else {
        if (selectedIcon) {
            setClassName(" fa fa-star-o starred opacity", selectedIcon);
        }
    }
}




/**
 * show the right navigation bar.
 * @param {event} event
 */
function openRightContent(event) : void {
    var mainContentTaskId = (event.currentTarget.parentElement.id);
    var main = getElementsByClassName("new-content");
    var listItem = getElementByListId(main.id);
    var task = getElementByTaskId(listItem, event.target.id);
    changeSelectIcon(task);
    changeStarIcon(task);

    markSelected(task);

    setRemindDate(task);
    setDueDate(task);
    setTaskHint(task);
    setId(event.target.id, getElementsByClassName("right-nav-bar"));
    var rightContent = getElementsByClassName("right-nav-bar");
    setClassName("active", event.target);
    getElementsByClassName("content").innerHTML = event.target.innerHTML;
    makeDisplayBlock("right-nav-bar");
}

/**
 * close the right navigation bar.
 */
function closeRightNavBar() : void {
    makeDisplayNone("right-nav-bar");
}

/**
 * show the input to create a new task.
 */
function showCreateTask() : void {
    makeDisplayNone("add-task");
    makeDisplayBlock("task-content display-none");
    (<HTMLInputElement>getElementsByClassName("input-type")).focus();
}

/**
 * hide the input box which allows to create a new task.
 */
function closeTask() : void{
    makeDisplayBlock("add-task");
    makeDisplayNone("task-content display-none");
}


/**
 * Make the element display as none.
 * @param {class name of the element} className
 */
function makeDisplayNone(className : string) : void {
    (<HTMLInputElement>getElementsByClassName(className)).style.display = 'none';
}


/**
 * Make the element display as block.
 * @param {class name of the element} className
 */
function makeDisplayBlock(className : string) : void {
    (<HTMLInputElement>getElementsByClassName(className)).style.display = 'block';
}


/**
 * Make the element display as inline block.
 * @param {class name of the element} className
 */
function makeDisplayInlineBlock(className : string) : void {
    (<HTMLInputElement>getElementsByClassName(className)).style.display = 'inline-block';
}

/**
 * Make the element display as inline.
 * @param {class name of the element} className
 */
function makeDisplayInline(className : string) : void {
    (<HTMLInputElement>getElementsByClassName(className)).style.display = 'inline';
}

/**
 * Create a new element.
 * @param {element} element
 */
function createElement(element : string) : Element{
    return doc.createElement(element);
}

/**
 * Set the class name to a specified element.
 * @param {class name } elementClassName
 * @param {element} element
 */
function setClassName(elementClassName : string , element : Element) : void {
    element.className = elementClassName;
}

/**
 * Set the id to a specified element.
 * @param {id} id
 * @param {element} element
 */
function setId(id : string, element : Element) : void {
    element.id = id;
}
