import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit
} from '@angular/core';

import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm
  implements OnInit {

  enrollForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {

    this.enrollForm = this.fb.group({

      studentName: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      studentEmail: this.fb.control(
        '',
        [
          Validators.required,
          Validators.email
        ],
        [
          this.simulateEmailCheck
        ]
      ),

      courseId: [
        '',
        [
          Validators.required,
          this.noCourseCode
        ]
      ],

      preferredSemester: [
        'Odd',
        Validators.required
      ],

      agreeToTerms: [
        false,
        Validators.requiredTrue
      ],

      additionalCourses: this.fb.array([])

    });

  }

  /*
    value excludes disabled controls

    getRawValue includes all controls,
    including disabled ones
  */

  onSubmit(): void {

    console.log(
      'Form Value:',
      this.enrollForm.value
    );

    console.log(
      'Raw Value:',
      this.enrollForm.getRawValue()
    );

  }

  noCourseCode(
    control: AbstractControl
  ): ValidationErrors | null {

    const value =
      control.value?.toString() ?? '';

    if (
      value.toUpperCase().startsWith('XX')
    ) {
      return {
        noCourseCode: true
      };
    }

    return null;
  }

  simulateEmailCheck(
  control: AbstractControl
): Promise<ValidationErrors | null> {

  return new Promise((resolve) => {

    setTimeout(() => {

      const email = control.value ?? '';

      if (
        email.toLowerCase().includes('test@')
      ) {
        resolve({
          emailTaken: true
        });
      } else {
        resolve(null);
      }

    }, 800);

  });

}

  get additionalCourses(): FormArray<FormControl> {

  return this.enrollForm.get(
    'additionalCourses'
  ) as FormArray<FormControl>;

}
get additionalCourseControls(): FormControl[] {

  return this.additionalCourses
    .controls as FormControl[];

}

  addCourse(): void {

    this.additionalCourses.push(

      new FormControl(
        '',
        Validators.required
      )

    );

  }

  removeCourse(index: number): void {

    this.additionalCourses.removeAt(index);

  }

}