import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { Student, StudentTrack } from './models/student';
import { StudentDetails } from './components/studentdetails';
import { StudentTrackService } from './services/studenttrackservice';
import { StudentService } from './services/studentservice';
import 'rxjs/Rx';

// create a class with annotations..
@Component({	selector: 'student-track-survey',

	template: `
	<div *ngFor="#studentTrack of studentTracks" class="studenttrack light-primary-color text-primary-color">
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
	public studentTracks: StudentTrack[]; 	
	public currentStudent: Student;
	
	constructor (studentTrackService: StudentTrackService){
        this.studentTracks = [];
	    studentTrackService.getStudentTracks().subscribe(studentTracks => this.studentTracks = studentTracks);
    }
	
	setSelected(student:Student){
		console.log(`student selected ${student.firstname}`);
		this.currentStudent = student;
	}
    
    private randomFirstname(){
        return this.pullRandom(['Nico', 'John', 'Harry', 'Klaas', 'Henk-Jan']);
    }
    private randomLastname(){
        return this.pullRandom(['Beritsen', 'De Smedt', 'Jansen', 'Gorter', 'Brabander']);
    }
    private randomSchool(){
        return this.pullRandom(['Hogeschool Breda', 'Hogeschool Den Bosch', 'Universiteit Amsterdam', 'Hogschool Utrecht']);
    }
    
    private pullRandom(source: string[]){
      return source[Math.floor(Math.random()*100)%source.length];
    }
}

// bootstrap our application..
bootstrap(SurveyApplication, [StudentTrackService, StudentService, HTTP_PROVIDERS ]); 