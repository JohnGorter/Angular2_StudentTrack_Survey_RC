import { Student } from '../models/Student';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Injectable} from '@angular/core';

let STUDENT_TRACK_API_URL = '/api/studenttracks';
let STUDENTS_API_URL = '/api/students';

@Injectable()
export class StudentService {

    constructor(private http: Http) { }

    public getStudentsForTrack(trackId: number): Observable<Student[]> {
        return this.http.get(`${STUDENT_TRACK_API_URL}/${trackId}/students.json`)
            .map(resp => <any[]>resp.json())
            .map(studentsJson => studentsJson.map(studentJson => new Student(studentJson)))
            .catch(this.handleError);
    }
    
    public getStudents(): Observable<Student[]> {
        return this.http.get(`${STUDENTS_API_URL}/all.json`)
            .map(resp => <any[]>resp.json())
            .map(studentsJson => studentsJson.map(studentJson => new Student(studentJson)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}