import * as React from 'react';
import CreateNewTask from './CreateNewTask';
import operations from './Opertions';
import Task from './Task';




class Main extends React.Component <{activeId :string ,  makeTaskActive : (e : any) => void} , { isTaskSelected: boolean, list : any , inputValue : string ,array : [],  isSelected :boolean}> {


    constructor(props: any) {
        super(props);
        this.state={
            array : [],
            inputValue : "",
            isSelected : false,
            isTaskSelected : false,
            list : null,


        };

    }



    public showInputFormToAddTask = () => {
        this.setState({
            isSelected : !this.state.isSelected ,
            
    
        })

    }



          
public showTask = () => {
    const list = operations.findListById(this.props.activeId);
  if ( list != null ) {

    let taskLength = list.getTasks().length;
    list.getTasks().push(new Task(list.getId() + "_Task" + ++taskLength, this.state.inputValue));

  }
    
    this.showInputFormToAddTask();
    this.setState({
        inputValue : "",
        

    })

}

public enterKeyPress = (e : any) => {
    if (e.key === 'Enter') {
      this.showTask();
    }
}

   
public setTaskName = (event : any) => {

    this.setState({
        inputValue :event.target.value,
    })

    }


public makeTaskActive= (event : any) => {
    this.props.makeTaskActive(event.target.id);
}

public makeImportant = (e : any) => {
    alert("aa" +e.target.id)

 const task  = operations.findTaskById(e.target.id)

 this.setState({
    isTaskSelected : !this.state.isTaskSelected,
})
if(task !=null) {

task.setTaskSelected(this.state.isTaskSelected);

}

       }


       
   
    

  public render() {
      const list = operations.findListById(this.props.activeId);

    return (
        <div className="main-content">
        <div className="my-list-elements">
            <h2 className="my-list-label">
             { 
             ( list == null ? "My List" :  list.getListName() )}
                        
                <a className="more-icon">
                <i className="fa fa-ellipsis-h"/>
                </a>   
            </h2>
            <a className="sort-icon">
                <i className="fa fa-trash color  display-none"/>
                <i className="fa fa-exchange rotate"/>
                <h4>Sort</h4>
            </a>
        </div>
        <div className="task-content make-content-none "  >
            <i className="fa fa-circle-o color"/>
            <p className="message">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <i className="fa fa-star-o starred"/>
        </div>
        <div className="new-content">
        <CreateNewTask  activeId = {this.props.activeId} makeTaskActive = {this.makeTaskActive}
        makeImportant= {this.makeImportant}/>
        
         </div>
        <div className={"add-task" + (this.state.isSelected ? " display-none" : "")} onClick = {this.showInputFormToAddTask} >
            <a>
            <i className="fa fa-plus opacity" />

                <p >Add a task </p>
            </a>
        </div>
        <div className= {"task-content display-none" + (this.state.isSelected ? " display-block" : "")}>
            <a>
            <i className="fa fa-circle-o color"/>
            <input type="text" placeholder="Add a task" value= {this.state.inputValue} className="input-type" onKeyPress = {this.enterKeyPress} onChange = {this.setTaskName}/>
            <button className="add-button starred change-color" onClick = {this.showTask}>ADD</button>
            </a>
        </div>
    </div>
    );
  }
}

export default Main;