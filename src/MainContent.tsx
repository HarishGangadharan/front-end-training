import * as React from 'react';

import Main from './Main';

import RightContent from './RightContent';

import SideNav from './SideNav';



class MainContent extends React.Component <{} , {activeId : string , activeTaskId : string} >{

    constructor(props: any) {
        super(props)
        this.state={

            activeId : "",
            activeTaskId : "",

        
        };
    }

    public makeTaskActive = (taskId : string) => {
      this.setState({
          activeTaskId : taskId,
      })
     

    }




    public makeListActive = (listId : string) => {
   
this.setState({
    activeId : listId,
    activeTaskId : "",
})        
}

  public render() {

    return (
        
        <div className = "middle-content" >
<SideNav makeListActive = {this.makeListActive}/>
<Main activeId = {this.state.activeId} makeTaskActive = {this.makeTaskActive}/> 
< RightContent activeTaskId = {this.state.activeTaskId}/>


        </div>

       

    );
  }
}

export default MainContent;
