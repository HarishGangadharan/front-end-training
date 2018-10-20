import * as React from 'react';
import './style.css';

import MainContent from './MainContent';
import TopNav from './TopNav';


class App extends React.Component {
 public render() {
   return (
     <div className="App">
     <TopNav/>

     <MainContent/>
     </div>
   );
 }
}

export default App;
