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

  getAllCourses() {
    return this.tabCourses;
  }

  constructor() {}
}
