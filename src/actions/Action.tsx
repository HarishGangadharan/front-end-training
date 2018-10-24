import dispatcher from "../Dispatcher";

import List from "../components/List";

export const LIST_ACTION = {

    ADD_LIST: 'listAction.addList' 
};

export function addList(list : List) {
     alert("action" + list.getId())
    dispatcher.dispatch({
        type: LIST_ACTION.ADD_LIST,
        value: list
    })

}

