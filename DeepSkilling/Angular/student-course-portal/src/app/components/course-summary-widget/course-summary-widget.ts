import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-summary-widget.html',
  styleUrl: './course-summary-widget.css'
})
export class CourseSummaryWidget {

  constructor(
    private courseService: CourseService
  ) {}

  get totalCourses(): number {

    return this.courseService
      .getCourses()
      .length;

  }

}