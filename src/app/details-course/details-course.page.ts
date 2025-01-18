import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GestionCourseService } from '../services/gestion-course.service';

@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.page.html',
  styleUrls: ['./details-course.page.scss'],
  standalone: false,
})
export class DetailsCoursePage implements OnInit {
  selectedCourse;
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseSer: GestionCourseService
  ) {}

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.params['id']);
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.selectedCourse = this.courseSer.getCourseById(
      Number(this.activatedRoute.snapshot.paramMap.get('id'))
    );
    console.log(this.selectedCourse);
  }
}
