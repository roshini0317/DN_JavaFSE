import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnrollmentService }
from '../../services/enrollment';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course';
import {
  switchMap
} from 'rxjs/operators';
@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})

export class CourseDetail implements OnInit {

  course?: Course;

  constructor(
    private route: ActivatedRoute,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {

  this.route.paramMap
    .pipe(

      switchMap(params => {

        const id = Number(
          params.get('id')
        );

        return this.enrollmentService
          .getStudentsByCourse(id);

      })

    )
    .subscribe(students => {

      console.log(
        'Enrolled Students:',
        students
      );

    });

}
  

}