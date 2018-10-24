import * as React from 'react';
import './components/style.css';

import { createStore } from 'redux'

import { Provider } from 'react-redux';


import MainContent from './components/MainContent';
import rootReducer from './reducers/todo'

import TopNav from './components/TopNav';


const storeTree = createStore(rootReducer);

class App extends React.Component {

 public render() {

   return (
     <Provider store = {storeTree}>
     <div className="App">
     <TopNav/>

     <MainContent />
     </div>
     </Provider>

   );
 }
}

export default App;
