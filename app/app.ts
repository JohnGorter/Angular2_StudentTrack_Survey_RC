import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { Student, StudentTrack } from './models/student';
import { StudentDetails } from './components/studentdetails';
import { StudentTrackService } from './services/studenttrackservice';
import { StudentService } from './services/studentservice';
import 'rxjs/Rx';

// create a class with annotations..
@Component({	
	selector: 'student-track-survey',
	template: `
       <div *ngIf="studentTrack">
	   <h1 class="dark-primary-color text-primary-color">Student track {{studentTrack.name}} (<span [innerText]="studentTrack.getStudents().length"></span> attendees)</h1>
	    <student-details 
			[student]="student" 
			[isSelected]="currentStudent === student"
			*ngFor="let student of studentTrack.getStudents()" 
			(selected)="setSelected(student)"> 
		</student-details>
        </div>
	`,
	styles:[`
	 .student { padding:15px; }
	 .studentTrack { border:1px solid black;margin:5px;padding:0px; }
	 .studentTrack h1 { margin:0px;padding:15px;}
	`],
    directives: [StudentDetails]
})
export class SurveyApplication {	
	public studentTrack: StudentTrack; 	
	public currentStudent: Student;
	
	constructor (studentTrackService: StudentTrackService){
	    studentTrackService.getStudentTracks().subscribe(studentTracks => this.studentTrack = studentTracks[0]);
    }
	
	setSelected(student:Student){
		this.currentStudent = student;
	}
}

// bootstrap our application..
bootstrap(SurveyApplication, [StudentTrackService, HTTP_PROVIDERS ]); 