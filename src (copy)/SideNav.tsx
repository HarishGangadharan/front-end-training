import * as React from 'react';
import CreateNewList from './CreateNewList';
import ItemList from './ItemList';


import List from './List';


class SideNav extends React.Component<{ makeListActive : (e : any) => void} , {activeId : string , color :string , inputValue  :string , isClicked :boolean, isSelected :boolean  }> {
 
    constructor(props : any) {
        super(props);
        this.state={
            activeId : "",
            color : "",
            inputValue : "",
            isClicked : false,
            isSelected : false,
        };
    }



    
public toggleSideNav = () => {
this.setState({
    isClicked : !this.state.isClicked ,
})
}


   
public setListName = (event : any) => {

    this.setState({
        inputValue :event.target.value,
    })

    }

       


          
public showList = () => {
    let id =   (ItemList.length);
    ItemList.push(new List( "List" + ++id  , this.state.inputValue , []));
    this.showAddNewList();
    this.setState({
        inputValue : "",
        

    })

   
        }

public showAddNewList = () => {
    this.setState({
        isSelected : !this.state.isSelected ,
        

    })




}

public makeListActive = (event : any) => {
   this.props.makeListActive(event.target.id);
this.setState({
    activeId :event.target.id  ,


    color : "background"  ,

    

})

}


public enterKeyPress = (e : any) => {
    if (e.key === 'Enter') {
      this.showList();
    }
}




  public render() {

    return (
        <div className= {"side-nav-bar " + (this.state.isClicked ? "adjust-sidenav" : "")} >
        <nav className="topnav box-shadow">
            <ul  className="icons">
                <li onClick = {this.toggleSideNav}>
                    <i className="fa fa-bars opacity "/>
                </li>
                <li> 
                    <a>
                    <i className="fa fa-sun-o"/>

                        <p className= {"content-date " + (this.state.isClicked ? " display-none" : "")} >My Day </p>
                    </a>
                </li>
                <li>
                    <a>
                    <i className="fa fa-star-o"/>
                        <p  className={"content-date " + (this.state.isClicked ? " display-none" : "")}>Important</p>
                    </a>
                </li>
                <li>
                    <a>
                        <i className="fa fa-calendar icons-size"/>
                        <p className= {" label-plannedcontent-date " + (this.state.isClicked ? " display-none" : "")}>Planned </p>
                    </a>
                </li>
                <li>
                    <a>
                    <i className="fa fa-home"/>
                        <p  className={"content-date " + (this.state.isClicked ? " display-none" : "")}>Tasks </p>
                    </a>
                </li>
                <li className="list-icon display-none">
                    <a>
                        <i className=" fa fa-list-ul icon-my-list icons-size"/>
                        <p className="label-my-list content-data" >My List </p>
                    </a>
                </li>
                <ul className="newly-added-list">       
                  <CreateNewList activeId = {this.state.activeId} colorChange = {this.state.color} makeListActive = {this.makeListActive}

                  />
</ul>

                <li >

                    <a className={"new-list" +  (this.state.isSelected ? " display-none" : "") } onClick = {this.showAddNewList}>
                    <i className="fa fa-plus opacity icon-my-list icons-size"/>
                        <p className= {" label-my-list aligncontent-date " + (this.state.isClicked ? " display-none" : "")}>New List  </p>
                    </a>
                    <div className= {"list-name display-none" + (this.state.isSelected ? " display-block" : "") }>
                        <input type = "text"   className="add-list-name" value = {this.state.inputValue} placeholder="Add a list name" onKeyPress = {this.enterKeyPress} onChange = {this.setListName} />
                        <button className={"add-name-button  display-none" + (this.state.isSelected ? " display-inline-block" : "") }   onClick = {this.showList}>Add Name</button>
                    </div>
                </li>
            </ul>
        </nav>
    </div>   

   
    );
  }
}

export default SideNav;
