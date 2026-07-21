import { CommonModule } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { Course } from '../../models/course.model';
import { Highlight } from '../../directives/highlight';
import { EnrollmentService } from '../../services/enrollment';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';

/*export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus: 'passed' | 'failed' | 'pending';
  enrolled?: boolean;
}*/


@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
  CommonModule,
  CreditLabelPipe,
  Highlight
],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCardComponent implements OnChanges {
  constructor(
  private enrollmentService: EnrollmentService
) {}
  isExpanded = false;

  @Input()
  course!: Course;

  @Output()
  enrollRequested = new EventEmitter<number>();
  get cardClasses(): Record<string, boolean> {

  return {
    'card--enrolled': this.isEnrolled,
    'card--full': this.course?.credits >= 4,
    'expanded': this.isExpanded
  };

}
  get borderColor(): string {

    switch (this.course.gradeStatus) {

      case 'passed':
        return '#16a34a';

      case 'failed':
        return '#dc2626';

      default:
        return '#6b7280';

    }

  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['course']) {

      console.log(
        'Previous Value:',
        changes['course'].previousValue
      );

      console.log(
        'Current Value:',
        changes['course'].currentValue
      );
    }
  }

 requestEnrollment(
  event: Event
): void {

  event.stopPropagation();

  this.toggleEnrollment();

  this.enrollRequested.emit(
    this.course.id
  );

}
  toggleDetails(): void {

    this.isExpanded = !this.isExpanded;

  }
  toggleEnrollment(): void {

  if (
    this.enrollmentService.isEnrolled(
      this.course.id
    )
  ) {

    this.enrollmentService.unenroll(
      this.course.id
    );

  } else {

    this.enrollmentService.enroll(
      this.course.id
    );

  }

}
get isEnrolled(): boolean {

  return this.enrollmentService
    .isEnrolled(
      this.course.id
    );

}
}