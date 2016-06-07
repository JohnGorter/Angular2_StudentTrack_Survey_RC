import { Student } from '../models/Student';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';


export class StudentService {

    constructor(private http: Http) { }

    public getStudentsForTrack(trackId: number): Observable<Student[]> {
        // ?code? (hint: url is like '/api/studenttracks/{trackId}/students.json)
        return Observable.create([]);
    }
}