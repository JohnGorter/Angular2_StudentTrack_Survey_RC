import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import {Student, StudentTrack} from './models/student';

// create a class with annotations..
@Component({	
	selector: 'student-track-survey',
	template: `
	<div class="studentTrack">
	   <h1 class="default-primary-color text-primary-color">Student track {{studentTrack.name}} (<span inner-text="getCount()"></span> attendees)</h1>
	   <div class="student" *ngFor="#student of studentTrack.getStudents()">
	     {{ student.firstname }} {{ student.lastname }} {{ student.school }}
	   </div>
	 </div>
	`,
	styles:[`
	 .student { padding:15px; }
	 .studentTrack { border:1px solid black;margin:5px;padding:0px; }
	 .studentTrack h1 { margin:0px;padding:15px;}
	`]
})
export class SurveyApplication {	
	// ADD FIELD FOR THE STUDENTTRACK
	// your code here...
	
	
	constructor (){
		// ADD CODE HERE TO INSTANTIATE A NEW STUDENTTRACK
		// AND ADD SOME STUDENTS TO THE STUDENTTRACK
		// your code here...
	   
	   // REPLACE THIS ANONYMOUS FUNCTION WITH A PHAT ARROW ONE
	   window.setInterval(function() {
		   // RANDOMLY ADD NEW ATTENDEES TO THE STUDENTTRACK
		   // your code here...
		 	
	   }, 2000);
	}
	
	getCount(){
		// ADD CODE THAT RETURNS THE NUMBER OF STUDENTS FROM THE STUDENTTRACK
		// your code here...

	}
}

// bootstrap our application..
bootstrap(SurveyApplication); 