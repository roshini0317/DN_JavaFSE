import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  Observable,
  throwError
} from 'rxjs';

import {
  map,
  tap,
  retry,
  catchError
} from 'rxjs/operators';

import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private http: HttpClient
  ) {}

  /*
    Retained from previous hands-ons.
    Not used anymore once JSON Server is active,
    but keeping it preserves earlier tasks.
  */
  private courses: Course[] = [
    {
      id: 101,
      name: 'Angular Development',
      code: 'ANG201',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 102,
      name: 'Spring Boot',
      code: 'SPR202',
      credits: 3,
      gradeStatus: 'pending'
    },
    {
      id: 103,
      name: 'Microservices',
      code: 'MIC301',
      credits: 4,
      gradeStatus: 'failed'
    },
    {
      id: 104,
      name: 'Cloud Computing',
      code: 'CLD302',
      credits: 3,
      gradeStatus: 'passed'
    },
    {
      id: 105,
      name: 'DevOps Fundamentals',
      code: 'DOP401',
      credits: 2,
      gradeStatus: 'pending'
    }
  ];

  /*
    Task 79
    GET all courses from JSON Server

    Task 83
    map()

    Task 85
    tap()

    Task 86
    retry()

    Task 84
    catchError()
  */
  getCourses(): Observable<Course[]> {

    return this.http
      .get<Course[]>(
        'http://localhost:3000/courses'
      )
      .pipe(

        map(courses =>
          courses.filter(
            c => c.credits > 0
          )
        ),

        tap(courses => {

          console.log(
            'Courses loaded:',
            courses.length
          );

        }),

        retry(2),

        catchError(err => {

          console.error(err);

          return throwError(
            () =>
              new Error(
                'Failed to load courses. Please try again.'
              )
          );

        })

      );

  }

  /*
    Task 79
    GET course by ID
  */
  getCourseById(
    id: number
  ): Observable<Course> {

    return this.http.get<Course>(
      `http://localhost:3000/courses/${id}`
    );

  }

  /*
    Task 81
    POST
  */
  createCourse(
    course: Omit<Course, 'id'>
  ): Observable<Course> {

    return this.http.post<Course>(
      'http://localhost:3000/courses',
      course
    );

  }

  /*
    Task 82
    PUT
  */
  updateCourse(
    course: Course
  ): Observable<Course> {

    return this.http.put<Course>(
      `http://localhost:3000/courses/${course.id}`,
      course
    );

  }

  /*
    Task 82
    DELETE
  */
  deleteCourse(
    id: number
  ): Observable<void> {

    return this.http.delete<void>(
      `http://localhost:3000/courses/${id}`
    );

  }

  /*
    Preserved from previous hands-ons
  */
  addCourse(
    course: Course
  ): void {

    this.courses.push(course);

  }

}