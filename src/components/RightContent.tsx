import * as React from 'react';


class RightContent extends React.Component<{ task: any, setHint: any, deleteTask: any }, { isTaskSelected: boolean, hint: string, isDuePickerSelected: boolean, isPickerSelected: boolean }> {
    private classNameDiv: string = "";

    constructor(props: any) {

        super(props);
        this.state = {
            isDuePickerSelected: false,
            isTaskSelected: false,


            isPickerSelected: false,

            hint: "",
        }


    }

    public setRemindDate = (e: any) => {

        this.showDatePickerToAddRemindDate();

        if (this.props.task != null) {
            this.props.task.setRemindDate(e.target.value);

        }

    }



    public setDueDate = (e: any) => {

        this.showDatePickerToAddDueDate();

        if (this.props.task != null) {
            this.props.task.setDueDate(e.target.value);

        }

    }



    public showDatePickerToAddRemindDate = () => {

        this.setState({
            isPickerSelected: !this.state.isPickerSelected,
        })
    }


    public showDatePickerToAddDueDate = () => {

        this.setState({
            isDuePickerSelected: !this.state.isDuePickerSelected,
        })
    }


    public addHint = (e: any) => {
        this.props.setHint(e.target.value);





    }





    public makeImportant = () => {

        this.setState({
            isTaskSelected: !this.state.isTaskSelected,
        })
        if (this.props.task != null) {

            this.props.task.setTaskSelected(this.state.isTaskSelected);

        }


    }











    public render() {

        if (this.props.task !== null) {
            this.classNameDiv = "right-nav-bar display-block";


        } else {
            this.classNameDiv = "right-nav-bar";

        }



        return (


            <div className={this.classNameDiv} >
                <div className="right-content-1">
                    <div className="select-icon">
                        <i className={(this.props.task != null) ? this.props.task.getTaskSelected() ? "fa fa-circle color opacity" : "fa fa-circle-o color opacity" : "fa fa-circle-o color opacity"} onClick={this.makeImportant} />
                    </div>
                    <div className="content">{(this.props.task != null ? this.props.task.getTaskName() : "")} </div>

                    <div className="important">
                        <i className="fa fa-star-o starred opacity" />
                        <i className="far fa-trash-alt" />
                    </div>
                </div>
                <div className="my-day-content">
                    <div className="icon">
                        <i className="fa fa-sun-o adjust-margin" />

                    </div>
                    <div className="day-content">
                        <h4>Add to My Day </h4>
                    </div>
                </div>
                <div className="my-day-content adjust-height">
                    <div className="first-content">
                        <div className="icon">

                            <i className="fa fa-sun-o adjust-margin" />
                        </div>
                        <div className="remind-content" onClick={this.showDatePickerToAddRemindDate}>
                            <h4 className="remind-me-value">{(this.props.task !== null ? this.props.task.getRemindDate() ? this.props.task.getRemindDate() : "Remind me" : "Remind me")}</h4>
                        </div>
                        <div className="date">
                            <input type="date" onBlur={this.setRemindDate} className={(this.state.isPickerSelected ? "date-picker display-block" : "date-picker")} id="datePickerId" />
                        </div>
                    </div>
                    <div className="first-content">
                        <div className="icon">
                            <i className="fa fa-calendar adjust-margin" />
                        </div>
                        <div className="remind-content due-date" onClick={this.showDatePickerToAddDueDate}>

                            <h4 className="due-date-value">
                                {(this.props.task != null ? this.props.task.getDueDate() ? this.props.task.getDueDate() : "Due date" : "Due date")}
                            </h4>
                        </div>
                        <div className="date">
                            <input type="date" onBlur={this.setDueDate} className={(this.state.isDuePickerSelected ? "date-picker display-block due-date-picker" : "date-picker display-none due-date-picker")} id="duedatePickerId" />
                        </div>
                    </div>
                    <div className="first-content">
                        <div className="icon">
                            <i className="fa fa-repeat adjust-margin" />
                        </div>
                        <div className="remind-content">
                            <h4 className="align-top">Repeat</h4>
                        </div>
                    </div>
                </div>
                <div className="my-day-content textarea-height">
                    <textarea
                        className="textarea-content" rows={4} cols={50} placeholder="Add a note"
                        onChange={this.addHint} value={(this.props.task != null ? this.props.task.getHint() : "")} />


                </div>
                <div className="footer-content">
                    <div className="next-icon">
                        <a>
                            <i className="fa fa-arrow-right adjust-left" title="Hide details view" />
                        </a>
                    </div>
                    <div className="created-today">
                        <p className="adjust-font-size">Created Today</p>
                    </div>
                    <div className="delete-icon" title="delete task">
                        <a>
                            <i className="fa fa-trash color-change" onClick={this.props.deleteTask} />
                        </a>
                    </div>
                </div>
            </div>



        );



    }
}

export default RightContent;