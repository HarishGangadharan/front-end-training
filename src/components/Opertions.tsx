import store from '../store/Store';

class Opertions {


    public findListById(listId: string) {
        let list;
        for (const listItem of store.getAllList()) {
            if (listItem.getId() === listId) {
                list = listItem;
            }
        }
        return list;
    }

    public findTaskById(taskId: string) {
        let task;
        const splitString = taskId.split("_");
        const list = this.findListById(splitString[0]);
        if (list != null) {

            for (const taskItem of list.getTasks()) {

                if (taskItem.getId() === taskId) {

                    task = taskItem;

                }
            }
        }
        return task;
    }
}

export default new Opertions();