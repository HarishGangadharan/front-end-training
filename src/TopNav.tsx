import * as React from 'react';



class TopNav extends React.Component {
  public render() {
    return (
      <div className="top-bar">
                <p className="top-bar-label">
                    To-Do
                </p>
                <div className="search-bar" title="Search">
                    <button type="submit" className="submit-button">
                    <i className="fa fa-search"/>
                    </button>
                    <input className = "search-task" type="text" placeholder="Search"/>
                </div>
            </div>
    );
  }
}

export default TopNav;
