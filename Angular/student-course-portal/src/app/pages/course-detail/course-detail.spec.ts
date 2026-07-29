import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { vi } from 'vitest';

import { CourseDetail } from './course-detail';
import { EnrollmentService } from '../../services/enrollment';

describe('CourseDetail', () => {
  let component: CourseDetail;
  let fixture: ComponentFixture<CourseDetail>;

  const enrollmentServiceMock = {
    getStudentsByCourse: vi.fn().mockReturnValue(
      of([
        {
          id: 1,
          name: 'John Doe',
          courseId: 1
        },
        {
          id: 2,
          name: 'Jane Smith',
          courseId: 1
        }
      ])
    )
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseDetail],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) => '1'
            })
          }
        },
        {
          provide: EnrollmentService,
          useValue: enrollmentServiceMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseDetail);
    component = fixture.componentInstance;

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load enrolled students', () => {
    expect(
      enrollmentServiceMock.getStudentsByCourse
    ).toHaveBeenCalledWith(1);
  });
});