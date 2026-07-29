import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import {
  Course
} from '../models/course.model';

import {
  CourseService
} from './course';
import { of } from 'rxjs';

const mockCourseService = {
  getCourses: () =>
    of([
      {
        id: 1,
        name: 'Angular',
        code: 'ANG101',
        credits: 4
      }
    ])
};
providers: [
  {
    provide: CourseService,
    useValue: mockCourseService
  }
]
describe('CourseService', () => {

  let service: CourseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({

      imports: [
        HttpClientTestingModule
      ],

      providers: [
        CourseService
      ]

    });

    service =
      TestBed.inject(
        CourseService
      );

    httpMock =
      TestBed.inject(
        HttpTestingController
      );

  });

  afterEach(() => {

    httpMock.verify();

  });

  it('should be created', () => {

    expect(service)
      .toBeTruthy();

  });

  /*
    Task 107
    Test GET Courses
  */
  it('should get courses', () => {

    const mockCourses: Course[] = [

      {
        id: 1,
        name: 'Angular',
        code: 'ANG101',
        credits: 4,
        gradeStatus: 'passed'
      },

      {
        id: 2,
        name: 'RxJS',
        code: 'RX101',
        credits: 3,
        gradeStatus: 'pending'
      }

    ];

    service
      .getCourses()
      .subscribe((courses: Course[]) => {

        expect(
          courses.length
        ).toBe(2);

      });

    const req =
      httpMock.expectOne(
        'http://localhost:3000/courses'
      );

    expect(
      req.request.method
    ).toBe('GET');

    req.flush(
      mockCourses
    );

  });

  /*
    Task 108
    Test Error Handling
    Updated for retry(2)
  */
  it('should handle errors', () => {

    service
      .getCourses()
      .subscribe({

        next: () => {

          fail(
            'Expected an error'
          );

        },

        error: (error: Error) => {

          expect(
            error.message
          ).toBe(
            'Failed to load courses. Please try again.'
          );

        }

      });

    /*
      retry(2)
      = original request
      + 2 retries
      = 3 total requests
    */

    for (let i = 0; i < 3; i++) {

      const req =
        httpMock.expectOne(
          'http://localhost:3000/courses'
        );

      req.flush(
        'Server Error',
        {
          status: 500,
          statusText: 'Server Error'
        }
      );

    }

  });

});