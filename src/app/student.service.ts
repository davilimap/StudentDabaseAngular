import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Student } from './student';

@Injectable()
export class StudentService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private studentsUrl = 'http://localhost:3030/Student';

  constructor(private http: Http) { }

  getStudents(): Promise<Student[]> {
    return this.http.get(this.studentsUrl)
               .toPromise()
               .then(response => response.json() as Student[])
               .catch(this.handleError);
  }


  getStudent(id: number): Promise<Student> {
    const url = `${this.studentsUrl}/${id}`;
    console.log(url);
    return this.http.get(url)
      .toPromise()
      .then(response =>  response.json()[0] as Student)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.studentsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Student> {
    var student = { id: 0, fullName: name };
    return this.http
      .post(this.studentsUrl, JSON.stringify({fullName: name}), {headers: this.headers})
      .toPromise()
      .then(res => {student.id = res.json() as number; return student})
      .catch(this.handleError);
  }

  update(student: Student): Promise<Student> {
    const url = `${this.studentsUrl}/${student.id}`;
    console.log(url)
    return this.http
      .put(url, JSON.stringify(student), {headers: this.headers})
      .toPromise()
      .then(() => student)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

