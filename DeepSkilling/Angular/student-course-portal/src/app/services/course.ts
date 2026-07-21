import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

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

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(
    id: number
  ): Course | undefined {

    return this.courses.find(
      course => course.id === id
    );

  }

  addCourse(
    course: Course
  ): void {

    this.courses.push(course);

  }

}