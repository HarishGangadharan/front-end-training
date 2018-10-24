import { EventEmitter } from "events";
import * as Action from "../actions/Action";
import List from '../components/List';

const itemList : List[] = [];
class Store extends EventEmitter {
    constructor() {
        super();
    }

    public getAllList =() =>{
        return itemList;
    }

    public handleActions(action: any) {
        switch (action.type) {
            case Action.LIST_ACTION.ADD_LIST: {
                 itemList.push(action.value)
                break;
            }
        }
    }
}

const store = new Store();
export default store;