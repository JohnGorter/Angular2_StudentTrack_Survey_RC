import { Component, provide } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { RouteConfig,  RouterLink, RouterOutlet, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated'; 
import { LocationStrategy, HashLocationStrategy } from '@angular/common'; 
import {HTTP_PROVIDERS} from '@angular/http';
import {Student, StudentTrack} from './models/student';
import {StudentDetails} from './components/studentdetails';
import {StudentTrackService} from './services/studenttrackservice';
import {StudentService} from './services/studentservice';
import { StudentCard } from './components/studentcard';
import {StudentTrackForm} from './form';
import 'rxjs/Rx';

// create a class with annotations..
@Component({
    selector: 'student-track-survey',
    template: `
	<student-track-form></student-track-form>
	<div *ngFor="let studentTrack of studentTracks" class="studenttrack light-primary-color text-primary-color">
	   <h1 class="dark-primary-color text-primary-color">Student track {{studentTrack.name}} (<span [innerText]="studentTrack.getStudents().length"></span> attendees)</h1>
	    <student-details 
			[student]="student" 
			[isSelected]="currentStudent === student"
			*ngFor="let student of studentTrack.getStudents()"
            (deleted)="removeStudent(studentTrack, student)" 
			(selected)="setSelected(student)"> 
		</student-details>
	 </div>
	`,
    styles: [`
	 .student { padding:15px; }
	 .studentTrack { border:1px solid black;margin:5px;padding:0px; }
	 .studentTrack h1 { margin:0px;padding:15px;}
	`],
    directives: [StudentDetails, StudentTrackForm, /* ?? code ?? */]
})
@RouteConfig([
	// ?? code ??
])
export class SurveyApplication {
    public studentTracks: StudentTrack[];
    public currentStudent: Student;

    constructor(studentTrackService: StudentTrackService) {
        this.studentTracks = [];
        studentTrackService.studentTracksRetrieved.subscribe(studentTracks => this.studentTracks = studentTracks);
    }

    setSelected(student: Student) {
        console.log(`student selected ${student.firstname}`);
        this.currentStudent = student;
    }

    removeStudent(track, student) {
        track.removeStudent(student);
    }
}

// bootstrap our application..
bootstrap(SurveyApplication, [StudentTrackService, StudentService, HTTP_PROVIDERS,
ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]); 