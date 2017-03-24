import { Component, OnInit } from '@angular/core';

import { Student }        from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent {

  constructor(private studentService: StudentService) { }
}
