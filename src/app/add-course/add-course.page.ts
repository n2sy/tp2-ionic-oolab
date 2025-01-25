import { Component, OnInit } from '@angular/core';
import { GestionCourseService } from '../services/gestion-course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
  standalone: false,
})
export class AddCoursePage implements OnInit {
  constructor(
    private courseSer: GestionCourseService,
    private router: Router
  ) {}

  ngOnInit() {}

  submitHandler(val) {
    this.courseSer.addCourse(val);
    this.router.navigateByUrl('/home');
  }
}
