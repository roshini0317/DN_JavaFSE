import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { vi } from 'vitest';
import {
  SimpleChange
} from '@angular/core';

import {
  provideMockStore
} from '@ngrx/store/testing';

import { of } from 'rxjs';

import {
  CourseCardComponent
} from './course-card';

describe('CourseCardComponent', () => {

  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  const mockCourse = {

    id: 1,

    name: 'Data Structures',

    code: 'CS101',

    credits: 4,

    gradeStatus: 'passed' as const

  };

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        CourseCardComponent
      ],

      providers: [

        provideMockStore({

          initialState: {

            enrollment: {

              enrolledCourseIds: []

            }

          }

        })

      ]

    }).compileComponents();

    fixture =
      TestBed.createComponent(
        CourseCardComponent
      );

    component =
      fixture.componentInstance;

    component.course =
      mockCourse;

    fixture.detectChanges();

  });

  /*
    Task 102
  */
  it('should create', () => {

    expect(component)
      .toBeTruthy();

  });

  /*
    Task 103
    Tests @Input
  */
  it('should receive course input', () => {

    expect(
      component.course.name
    ).toBe(
      'Data Structures'
    );

  });

  /*
    Task 104
    Tests @Output
  */
  it('should emit enrollRequested', () => {

    const emitSpy =
  vi.spyOn(
    component.enrollRequested,
    'emit'
  );

    component.requestEnrollment(
      new Event('click')
    );

    expect(
      emitSpy
    ).toHaveBeenCalledWith(
      1
    );

  });

  /*
    Task 105
    Tests ngOnChanges
  */
  it('should log changes in ngOnChanges', () => {

    const logSpy =
  vi.spyOn(
    console,
    'log'
  );

    component.ngOnChanges({

      course: new SimpleChange(

        null,

        mockCourse,

        true

      )

    });

    expect(
      logSpy
    ).toHaveBeenCalled();

  });

  /*
    Previous hands-on
    toggleDetails()
  */
  it('should toggle details', () => {

    expect(
      component.isExpanded
    ).toBeFalsy();

    component.toggleDetails();

    expect(
      component.isExpanded
    ).toBeTruthy();

  });

  /*
    Previous hands-on
    cardClasses getter
  */
  it('should return card classes', () => {

    const classes =
      component.cardClasses;

    expect(
      classes['card--full']
    ).toBeTruthy();

  });

  /*
    Previous hands-on
    borderColor getter
  */
  it('should return green border for passed course', () => {

    expect(
      component.borderColor
    ).toBe(
      '#16a34a'
    );

  });

  /*
    Previous hands-on
    enrollment action logic
  */
  it('should dispatch enroll action when course is not enrolled', () => {

    component.enrolledIds$ =
      of([]);

    const dispatchSpy =
  vi.spyOn(
    (component as any).store,
    'dispatch'
  );

    component.toggleEnrollment(1);

    expect(
      dispatchSpy
    ).toHaveBeenCalled();

  });

});