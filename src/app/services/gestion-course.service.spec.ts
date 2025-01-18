import { TestBed } from '@angular/core/testing';

import { GestionCourseService } from './gestion-course.service';

describe('GestionCourseService', () => {
  let service: GestionCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
