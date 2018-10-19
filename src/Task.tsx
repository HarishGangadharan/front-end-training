class Task {

     
    private  id: string;
    private   taskName: string;
    private  isSelected: boolean;
    private isStarred: boolean;
    private  remindDate: string;
    private   dueDate: string;
    private hint: string;


    constructor(id:string,taskName:string){
        this.id= id;
        this.taskName = taskName;
        }
  
    public getId() : string{
       return this.id;
    }
    public setId(id :string) :void {
        this.id = id;
    }
    public getTaskName() : string{
        return this.taskName;
     }
     public setTaskName(taskName :string) :void {
         this.taskName = taskName;
     }


     public getTaskSelected() : boolean{
        return this.isSelected;
     }
     public setTaskSelected(isSelected :boolean) :void {
         this.isSelected = isSelected;
     }

     public getTaskStarred() : boolean{
        return this.isStarred;
     }
     public setTaskStarred(isStarred :boolean) :void {
         this.isStarred = isStarred;
     }


     public getRemindDate() : string{
        return this.remindDate;
     }
     public setRemindDate(remindDate :string) :void {
         this.remindDate = remindDate;
     }

     public getDueDate() : string{
        return this.dueDate;
     }
     public setDueDate(dueDate :string) :void {
         this.dueDate = dueDate;
     }

     public getHint() : string{
        return this.hint;
     }
     public setHint(hint :string) :void {
         this.hint = hint;
     }

}


export default Task;
