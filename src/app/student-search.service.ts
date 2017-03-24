import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Student }           from './student';

@Injectable()
export class StudentSearchService {

  private studentsUrl = 'http://localhost:3030/Student';

  constructor(private http: Http) {}

  search(term: string): Observable<Student[]> {
    console.log(this.studentsUrl + `/?name=${term}`);
    return this.http
               .get(this.studentsUrl + `/?name=${term}`)
               .map(response => response.json() as Student[]);
  }
}
