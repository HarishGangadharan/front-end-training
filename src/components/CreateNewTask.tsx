import * as React from 'react';

import operations from './Opertions';

class CreateNewTask extends React.Component<{ activeId: string, makeTaskActive: (e: any) => void, makeImportant: (e: any) => void }> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    const list = operations.findListById(this.props.activeId);
    return (
      (list != null ? list.getTasks().map((task) =>
        <div onClick={this.props.makeTaskActive} className="task-content" id={task.getId()} key={task.getId()}>
          <i className={(task.getTaskSelected() ? "fa fa-circle color aa" : "fa fa-circle-o color aa")} id={task.getId()} onClick={this.props.makeImportant} />
          <i className="fa fa-star-o starred" />
          <p className="message" id={task.getId()}>{task.getTaskName()}</p>
        </div>) : ""));
  }
}
export default CreateNewTask;



