import * as React from 'react';

class CreateNewList extends React.Component<{ storeProps: any, activeId: string, colorChange: string, makeListActive: (e: any) => void }> {

  public render() {
    return (
      this.props.storeProps.map((item: any) =>
        <li key={item.getId()} className={(this.props.activeId === item.getId() ? "list-icon " + this.props.colorChange : "list-icon ")} id={item.getId()} onClick={this.props.makeListActive}>
          <a>
            <i className=" fa fa-list-ul icon-my-list icons-size" />
            <p className="label-my-list content-data">{item.getListName()} </p>
          </a>
        </li>
      )
    );
  }
}
export default CreateNewList;


