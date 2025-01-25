import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GestionCourseService {
  private tabCourses = [
    {
      id: 1,
      title: 'Angular',
      author: 'Nidhal Jelassi',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png',
      keywords: ['module', 'component', 'binding'],
    },
    {
      id: 2,
      title: 'Android',
      author: 'Bart Simpson',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/1200px-Android_logo_2019_%28stacked%29.svg.png',
      keywords: ['activity', 'intent', 'xml'],
    },
    {
      id: 3,
      title: 'ionic',
      author: 'Homer Simpson',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/cf/LogoIonic.png',
      keywords: ['page', 'routing', 'directive'],
    },
  ];

  addCourse(newCourse) {
    newCourse.id = this.tabCourses[this.tabCourses.length - 1].id + 1;
    newCourse.keywords = newCourse.keywords.trim().split(',');
    this.tabCourses.push(newCourse);
  }

  deleteCourse(selectedId) {
    // 1ère méthode
    // let tab = this.tabCourses.filter((course) => course.id != selectedId);
    // this.tabCourses = tab;

    //2eme methode
    let i = this.tabCourses.findIndex((course) => course.id == selectedId);
    this.tabCourses.splice(i, 1);
  }

  getAllCourses() {
    return this.tabCourses;
  }

  getCourseById(id: number) {
    return this.tabCourses.find((element) => element.id == id);
  }

  constructor() {}
}
