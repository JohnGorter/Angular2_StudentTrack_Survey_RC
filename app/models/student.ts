// COMPLETE THE STUDENT CLASS
// expose firstname, lastname and school properties
export class Student {
    public id: number;
    public firstname: string;
    public lastname: string;
    public school: string;

    constructor(studentJson: any) {
        this.id = studentJson.id;
        this.firstname = studentJson.firstname;
        this.lastname = studentJson.lastname;
        this.school = studentJson.school;
    }
}

// COMPLETE THE STUDENTTRACK CLASS
// expose name property, expose addStudentToTrack and getStudents methods
export class StudentTrack {

    private students: Student[];
    public name: string;
    public id: number;
    
    constructor(studentTrackJson: any) {
        this.name = studentTrackJson.name;
        this.id = studentTrackJson.id;
        this.students = [];
    }

    public addStudentToTrack(student: Student) {
        this.students.push(student);
    }

    public getStudents() {
        return this.students;
    }
}