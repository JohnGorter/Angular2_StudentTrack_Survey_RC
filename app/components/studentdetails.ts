// YOUR IMPORTS HERE...
import {Component, EventEmitter} from '@angular/core';
import {Student} from '../models/student';
import { StudentFormatter } from '../pipes/studentFormatter';


// YOUR COMPONENT ANNOTATION AND CLASS HERE...
@Component({
    selector: 'student-details',
    inputs: ['student', 'isSelected'],
    outputs: ['selected', 'deleted'],
    pipes: [StudentFormatter],
    template: `
	<div class="student"><span (click)="setSelected()" [class.defaultPrimaryColor]="isSelected"  [innerHtml]="student | studentFormatter">
	</span><button (click)="onDeleted()">remove</button></div>
	`
})
export class StudentDetails {
    student: Student;
    isSelected: boolean;
    selected: EventEmitter<Student> = new EventEmitter<Student>();
    deleted: EventEmitter<Student> = new EventEmitter<Student>();

    setSelected() {
        this.selected.emit(this.student);
    }
    onDeleted() {
        this.deleted.next(this.student);
    }
}