import * as React from 'react';
 import Operations from './Opertions';



class RightContent extends React.Component<{activeTaskId: string} , {taskId : string}> {
    private classNameDiv : string = "";
    constructor(props : any) {

        super(props);
        this.state = {

            taskId : "",
        }
      

    }

   
     
   

  public render() {
    let task : any;
        if(this.props.activeTaskId !== "") {
         task = Operations.findTaskById(this.props.activeTaskId);
         this.classNameDiv =    "right-nav-bar display-block";
        } else {
            this.classNameDiv =    "right-nav-bar";

        }

      


    return (
     
       
        <div className= {this.classNameDiv} >
        <div className="right-content-1">
            <div className="select-icon">
                <i className="fa fa-circle-o color opacity"/>
            </div>
            <div className="content">{(task != null ? task.getTaskName() : "")} </div>
            
            <div className="important">
                <i className="fa fa-star-o starred opacity"/>
                <i className="far fa-trash-alt"/>
            </div>
        </div>
        <div className="my-day-content">
            <div className="icon">
            <i className="fa fa-sun-o adjust-margin"/>

            </div>
            <div className="day-content">
                <h4>Add to My Day </h4>
            </div>
        </div>
        <div className="my-day-content adjust-height">
            <div className="first-content">
                <div className="icon">

            <i className="fa fa-sun-o adjust-margin"/>
                </div>
                <div className="remind-content">
                    <h4 className="remind-me-value">Remind me </h4>
                </div>
                <div className="date">
                    <input type= "date" className="date-picker" id="datePickerId" />
                </div>
            </div>
            <div className="first-content">
                <div className="icon">
                    <i className="fa fa-calendar adjust-margin"/>
                </div>
                <div className="remind-content due-date">
                    <h4 className="due-date-value">Add due date</h4>
                </div>
                <div className="date">
                    <input type= "date" className="date-picker display-none due-date-picker" id="duedatePickerId" />
                </div>
            </div>
            <div className="first-content">
                <div className="icon">
                <i className="fa fa-repeat adjust-margin"/>
                </div>
                <div className="remind-content">
                    <h4 className="align-top">Repeat</h4>
                </div>
            </div>
        </div>
        <div className="my-day-content textarea-height">
            <textarea className="textarea-content" rows={4} cols={50} placeholder="Add a note"/>
        </div>
        <div className="footer-content">
            <div className="next-icon">
                <a>
                <i className="fa fa-arrow-right adjust-left" title="Hide details view"/>
                </a>
            </div>
            <div className="created-today">
                <p className="adjust-font-size">Created Today</p>
            </div>
            <div className="delete-icon" title="delete task">
                <a>   
                <i className="fa fa-trash color-change"/>
                </a>
            </div>
        </div>
    </div>



    );
  }
}

export default RightContent;