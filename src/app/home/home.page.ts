import { Component, inject } from '@angular/core';
import { GestionCourseService } from '../services/gestion-course.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  allCourses: any[] = [];
  courseService = inject(GestionCourseService);
  //constructor(private courseService: GestionCourseService) {}

  ngOnInit() {
    this.allCourses = this.courseService.getAllCourses();
  }
}
