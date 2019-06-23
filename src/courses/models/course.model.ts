export class Course {
    public id: number = null;
    public title: string = null;
    public description: string = null;
    public dateCreated: Date = null;
    public dateUpdated: Date = null;
    public dateDeleted: Date = null;
    public author: any = {};
    public lessons: [] = [];
}
