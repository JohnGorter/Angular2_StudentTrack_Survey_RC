// COMPLETE THE STUDENT CLASS
// expose firstname, lastname and school properties
export class Student {
    constructor(public firstname: string, public lastname: string, public school: string) {
    }
}

// COMPLETE THE STUDENTTRACK CLASS
// expose name property, expose addStudentToTrack and getStudents methods
export class StudentTrack {

    private students: Student[];

    constructor(public name: string){
        this.students = [];
    }

    public addStudentToTrack(student: Student) {
        this.students.push(student);
    }
    
    public getStudents(){
        return this.students;
    }
}