import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { vi } from 'vitest';

import { CourseSummaryWidget } from './course-summary-widget';
import { CourseService } from '../../services/course';

describe('CourseSummaryWidget', () => {
  let component: CourseSummaryWidget;
  let fixture: ComponentFixture<CourseSummaryWidget>;

  const courseServiceMock = {
    getCourses: vi.fn().mockReturnValue(
      of([
        {
          id: 1,
          name: 'Angular',
          code: 'ANG101',
          credits: 4,
          gradeStatus: 'passed'
        },
        {
          id: 2,
          name: 'React',
          code: 'REA101',
          credits: 3,
          gradeStatus: 'passed'
        }
      ])
    )
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseSummaryWidget],
      providers: [
        {
          provide: CourseService,
          useValue: courseServiceMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseSummaryWidget);
    component = fixture.componentInstance;

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});