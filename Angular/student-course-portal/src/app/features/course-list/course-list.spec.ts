import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  provideMockStore,
  MockStore
} from '@ngrx/store/testing';

import {
  CourseListComponent
} from './course-list';
import { ActivatedRoute } from '@angular/router';

providers: [
  {
  provide: ActivatedRoute,
  useValue: {}
}]
import { provideRouter } from '@angular/router';
beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [CourseListComponent],
    providers: [
      provideRouter([])
    ]
  }).compileComponents();
});
describe('CourseListComponent', () => {

  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let store: MockStore;

  const initialState = {

    course: {

      courses: [

        {
          id: 1,
          name: 'Angular',
          code: 'ANG101',
          credits: 4,
          gradeStatus: 'passed'
        }

      ],

      loading: false,
      error: null

    }

  };

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        CourseListComponent
      ],

      providers: [
        provideMockStore({
          initialState
        })
      ]

    }).compileComponents();

    fixture =
      TestBed.createComponent(
        CourseListComponent
      );

    component =
      fixture.componentInstance;

    store =
      TestBed.inject(MockStore);

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component)
      .toBeTruthy();

  });

  it('should load courses from store', () => {

    component.courses$
      .subscribe(courses => {

        expect(
          courses.length
        ).toBe(1);

      });

  });

  it('should show loading state', () => {

    store.setState({

      course: {

        courses: [],
        loading: true,
        error: null

      }

    });

    fixture.detectChanges();

    component.loading$
      .subscribe(loading => {

        expect(
          loading
        ).toBeTruthy();

      });

  });

});