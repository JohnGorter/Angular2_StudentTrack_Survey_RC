// YOUR IMPORTS HERE...
import {Component, EventEmitter} from '@angular/core';
import {Student} from '../models/student';


// YOUR COMPONENT ANNOTATION AND CLASS HERE...
@Component({
    selector: 'student-details',
    inputs: ['student', 'isSelected'],
    outputs: ['selected'],
    template: `
	<div (click)="setSelected()" [class.defaultPrimaryColor]="isSelected" class="student" >{{ student.firstname }} {{ student.lastname }} {{ student.school }}</div>
	`
})
export class StudentDetails {
    student: Student;
    isSelected: boolean;
    selected: EventEmitter<Student> = new EventEmitter<Student>();

    setSelected() {
        this.selected.emit(this.student);
    }
}