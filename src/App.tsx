import * as React from 'react';
import './components/style.css';

import MainContent from './components/MainContent';
import TopNav from './components/TopNav';


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
