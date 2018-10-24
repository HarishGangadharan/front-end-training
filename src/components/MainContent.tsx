import * as React from 'react';

import Main from './Main';

import opertions from './Opertions';

import RightContent from './RightContent';


import SideNav from './SideNav';

import store from '../store/Store';






class MainContent extends React.Component<{}, {store : any,  activeId: string, activeTaskId: string, list: any, task: any }>{

    constructor(props: any) {
        super(props)

        this.state = {

            activeId: "",
            activeTaskId: "",
            list: null,
            store: {store},

            task: null,


        };
    }

    public makeTaskActive = (taskId: string) => {
        this.setState({
            activeTaskId: taskId,
            task: opertions.findTaskById(taskId),
        })
    }
    public makeListActive = (listId: string) => {
        this.setState({
            activeId: listId,
            list: opertions.findListById(listId),
            task: null,

        })

    }

    public setHint = (hint: string) => {
        this.state.task.setHint(hint)
    }

    public deleteTask = () => {
        this.state.list.getTasks().splice(this.state.list.getTasks().indexOf(this.state.task), 1)
        this.setState({
            task: null,
        })
    }

    public render() {
        return (
            <div className="middle-content" >
                <SideNav makeListActive={this.makeListActive} />
                <Main activeId={this.state.activeId} makeTaskActive={this.makeTaskActive} />
                < RightContent task={this.state.task} setHint={this.setHint} deleteTask={this.deleteTask} />
            </div>
        );
    }
}

export default MainContent;
