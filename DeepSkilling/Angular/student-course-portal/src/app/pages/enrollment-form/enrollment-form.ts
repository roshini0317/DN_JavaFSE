import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormsModule,
  NgForm
} from '@angular/forms';

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

  submitted = false;

  studentName = '';
  studentEmail = '';
  courseId: number | null = null;
  preferredSemester = '';
  agreeToTerms = false;

  onSubmit(form: NgForm): void {

    console.log('Form Value:', form.value);

    console.log('Form Valid:', form.valid);

    this.submitted = true;

  }

}