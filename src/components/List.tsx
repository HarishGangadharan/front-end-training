import Task from './Task';


class List {

    private id: string;
    private listName: string;
    private tasks: Task[] = [];


    constructor(id: string, name: string, tasks: Task[]) {
        this.id = id;
        this.listName = name;
        this.tasks = tasks;
    }

    public getId(): string {
        return this.id;
    }
    public setId(id: string): void {
        this.id = id;
    }

    public getListName(): string {
        return this.listName;
    }
    public setListName(listName: string): void {
        this.listName = listName;
    }


    public getTasks(): Task[] {
        return this.tasks;
    }
    public setTasks(tasks: Task[]): void {
        this.tasks = tasks;
    }




}

export default List;
