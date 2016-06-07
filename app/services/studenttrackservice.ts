import { Injectable, EventEmitter } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

import { Student, StudentTrack } from '../models/student';
import { StudentService } from './studentservice';

let STUDENT_TRACK_API_URL = '/api/studenttracks'

@Injectable()
export class StudentTrackService {
    studentTracksRetrieved:EventEmitter<StudentTrack[]>;
    private studentTracks: StudentTrack[];
    constructor(private http: Http, private studentService: StudentService) {
        this.studentTracksRetrieved = new EventEmitter<StudentTrack[]>();
        this.http.get(`${STUDENT_TRACK_API_URL}/all.json`)
            .map(res => <any[]>res.json())
            .map(res => res.map(studentTrackJson => new StudentTrack(studentTrackJson)))
            .do(studentTracks => studentTracks.forEach(studentTrack =>
                this.studentService.getStudentsForTrack(studentTrack.id).subscribe(students =>
                    students.forEach(student => studentTrack.addStudentToTrack(student)))))
            .catch(this.handleError)
            .subscribe(studentTracks => this.allStudentTracksSubscription(studentTracks))
    }

    private allStudentTracksSubscription(studentTracks: StudentTrack[]) {
        this.studentTracks = studentTracks;
        return this.studentTracksRetrieved.emit(studentTracks);
    }

    addStudentTrack(name: string) {
        this.studentTracks.push(new StudentTrack({ name, id: Math.floor(Math.random() * 1000) }));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}