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

    public removeStudent(student: Student) {
        this.students.splice(this.students.indexOf(student), 1);
    }

    public getStudents() {
        let students: Student[] = [];
        this.students.forEach(student => students.push(student));
        return students;
    }
}