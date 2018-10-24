import { EventEmitter } from "events";
import * as Action from "../actions/Action";
 import List from '../components/List';

import dispatcher from "../Dispatcher";

const itemList : List[] = [];
class Store extends EventEmitter {



    constructor() {
        super();
    }

    public getAllList =() =>{
        return itemList;

    }

    public handleActions(action: any) {
        alert("store")


        switch (action.type) {

            case Action.LIST_ACTION.ADD_LIST: {
                 itemList.push(action.value)
                break;
            }


        }
        console.log(itemList);

    }


}

const store = new Store();
console.log('INSIDE STORE');
dispatcher.register(store.handleActions.bind(store));
// export default { store, dispatcher };
// module.exports = {
//   dispatcher,
//   store
// };

export default store;