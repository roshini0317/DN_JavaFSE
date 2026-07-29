import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { Highlight } from '../../directives/highlight';

import {
  enrollInCourse,
  unenrollFromCourse
} from '../../store/enrollment/enrollment.actions';

import {
  selectEnrolledIds
} from '../../store/enrollment/enrollment.selectors';

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
export class CourseCardComponent
implements OnInit, OnChanges {

  constructor(
    private store: Store
  ) {}

  @Input()
  course!: Course;

  @Output()
  enrollRequested =
    new EventEmitter<number>();

  enrolledIds$!: Observable<number[]>;

  isExpanded = false;

  ngOnInit(): void {

    this.enrolledIds$ =
      this.store.select(
        selectEnrolledIds
      );

  }

  ngOnChanges(
    changes: SimpleChanges
  ): void {

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

  get cardClasses():
  Record<string, boolean> {

    return {

      'card--full':
        this.course?.credits >= 4,

      expanded:
        this.isExpanded

    };

  }

  get borderColor():
  string {

    switch (
      this.course.gradeStatus
    ) {

      case 'passed':
        return '#16a34a';

      case 'failed':
        return '#dc2626';

      default:
        return '#6b7280';

    }

  }

  toggleDetails(): void {

    this.isExpanded =
      !this.isExpanded;

  }

  requestEnrollment(
    event: Event
  ): void {

    event.stopPropagation();

    this.toggleEnrollment(
      this.course.id
    );

    this.enrollRequested.emit(
      this.course.id
    );

  }

toggleEnrollment(id: number): void {

  this.enrolledIds$
    .pipe(take(1))
    .subscribe(ids => {

      if (ids.includes(id)) {

        this.store.dispatch(
          unenrollFromCourse({
            courseId: id
          })
        );

      } else {

        this.store.dispatch(
          enrollInCourse({
            courseId: id
          })
        );

      }

    });

}

}