import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import {Student, StudentTrack} from './models/student';
import {StudentDetails} from './components/studentdetails';

// create a class with annotations..
@Component({	
	selector: 'student-track-survey',
	template: `
	<div class="studenttrack light-primary-color text-primary-color">
	   <h1 class="dark-primary-color text-primary-color">Student track {{studentTrack.name}} (<span [innerText]="getCount()"></span> attendees)</h1>
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
	// ADD FIELD FOR THE STUDENTTRACK
	public studentTrack: StudentTrack; 	
	public currentStudent: Student;
	
	constructor (){
		// ADD CODE HERE TO INSTANTIATE A NEW STUDENTTRACK
		// AND ADD SOME STUDENTS TO THE STUDENTTRACK
		this.studentTrack = new StudentTrack('Angular 2');
       
	   // REPLACE THIS ANONYMOUS FUNCTION WITH A PHAT ARROW ONE
	   window.setInterval(() => {
		   // RANDOMLY ADD NEW ATTENDEES TO THE STUDENTTRACK
           this.studentTrack.addStudentToTrack(new Student(this.randomFirstname(), this.randomLastname(), this.randomSchool()));
	   }, 2000);
	}
	
	getCount(){
		return this.studentTrack.getStudents().length
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
bootstrap(SurveyApplication);