
import List from "../components/List";

export const LIST_ACTION = {
    ADD_LIST: 'listAction.addList'
};

export function addList(list: List) {
    return ({
        type: LIST_ACTION.ADD_LIST,
        value: list,
    })
}

