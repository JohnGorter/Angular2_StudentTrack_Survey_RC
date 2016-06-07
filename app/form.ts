import {Component } from "@angular/core";
import { bootstrap } from '@angular/platform-browser-dynamic';
import { FORM_DIRECTIVES } from "@angular/common";
import { StudentTrackService } from './services/studenttrackservice';
import { StudentService } from './services/studentservice';
import { StudentFormatter } from './pipes/studentformatter';
import { Student, StudentTrack } from './models/student';

@Component({
    selector: 'student-track-form',
    directives: [FORM_DIRECTIVES],
    pipes: [StudentFormatter],
    template: `
     <div class="trackform light-primary-color text-primary-color"><h1 class="dark-primary-color text-primary-color">Add studenttrack or student to track</h1>
    <br/>
    <form #fa="ngForm" (submit)="onSubmitFormA(fa)" style="display:inline;margin-left:50px;">
    <span class="form-group">
      <label for="trackname">Add a new track</label>
      <input type="text" class="form-control" id="trackName" placeholder="Track Name" ngControl="trackname" required />
       <button type="submit" class="btn btn-default" [disabled]="!fa.valid">Add</button>
    </span>
   
    </form>
    <form #fb="ngForm" (submit)="onSubmitFormB(fb)" style="float:right;margin-right:100px;">
    <span class="form-group">
      <label for="student">Add Student</label>
      <select name="student" id="student" ngControl="student">
        <option value="">-select a student-</option>
        <option *ngFor="let student of students    " [value]="student.id">{{ student.firstname }}</option>
      </select>
      <label for="track">to track</label>
     <select name="track" id="student" ngControl="track" required>
        <option value="" selected>-select a track-</option>
        <option *ngFor="let track of studentTracks" [value]="track.id">{{ track.name }}</option>
      </select>
       <button type="submit" class="btn btn-default" [disabled]="!fb.valid">Add</button>
    </span>
    </form>
    <br/><br/>
    </div>
  `,
    styles: [`
	 .trackform { border:1px solid black;margin:5px;padding:0px; }
	 .trackform h1 { margin:0px;padding:15px;}
	`]
})
export class StudentTrackForm {

    students: Student[] = [];
    studentTracks: StudentTrack[] = [];

    constructor(private studentService: StudentService, private studentTrackService: StudentTrackService) {
        studentService.getStudents().subscribe(students => this.students = students);
        studentTrackService.studentTracksRetrieved.subscribe(studentTracks => this.studentTracks = studentTracks);
    }

    onSubmitFormA(form) {
        if (form.valid) {
            this.studentTrackService.addStudentTrack(form.value.trackname);
        }

    }

    onSubmitFormB(form) {
        if (form.valid) {
            var track = this.studentTracks.find(studentTrack => studentTrack.id === parseInt(form.value.track));
            track.addStudentToTrack(this.students.find(student => student.id === parseInt(form.value.student)));
        }
    }
}