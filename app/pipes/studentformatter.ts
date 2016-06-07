import { Pipe, PipeTransform  } from '@angular/core';
import { Student } from '../models/student';

@Pipe({
    name: 'studentFormatter'
})
export class StudentFormatter implements PipeTransform {
    transform(value: Student, args: string[]): any {
        return "<strong>Naam: " + value.firstname + " " + value.lastname + "</strong><br/>School: " + value.school;
    }
}