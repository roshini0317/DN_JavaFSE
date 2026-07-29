import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormsModule,
  NgForm
} from '@angular/forms';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css'
})
export class EnrollmentForm{
  constructor(
  private courseService: CourseService
) {}

  submitted = false;

  studentName = '';
  studentEmail = '';
  courseId: number | null = null;
  preferredSemester = '';
  agreeToTerms = false;

  onSubmit(
  form: NgForm
): void {

  const newCourse = {

    name: this.studentName,
    code: this.courseId?.toString() ?? '',
    credits: 3,
    gradeStatus: 'pending' as const

  };

  this.courseService
    .createCourse(newCourse)
    .subscribe({

      next: response => {

        console.log(
          'Course Created:',
          response
        );

        this.submitted = true;

      },

      error: err => {

        console.error(err);

      }

    });

}

}