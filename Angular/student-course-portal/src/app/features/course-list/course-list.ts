import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ActivatedRoute,
  Router
} from '@angular/router';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Course } from '../../models/course.model';
import { CourseCardComponent } from '../../components/course-card/course-card';

import {
  loadCourses
} from '../../store/course/course.actions';

import {
  selectAllCourses,
  selectCoursesLoading,
  selectCoursesError
} from '../../store/course/course.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CourseCardComponent
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})export class CourseListComponent implements OnInit {

  courses$!: Observable<Course[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  searchTerm = '';

  selectedCourseId:
    number | null = null;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    console.log(
      'CourseList initialized'
    );

    this.courses$ =
      this.store.select(
        selectAllCourses
      );

    this.loading$ =
      this.store.select(
        selectCoursesLoading
      );

    this.error$ =
      this.store.select(
        selectCoursesError
      );

    this.store.dispatch(
      loadCourses()
    );

    this.searchTerm =
      this.route.snapshot
        .queryParamMap
        .get('search') || '';

  }

  onSearch(): void {

    this.router.navigate(
      ['/courses'],
      {
        queryParams: {
          search: this.searchTerm
        }
      }
    );

  }

  onEnroll(
    courseId: number
  ): void {

    console.log(
      'Course selected:',
      courseId
    );

    this.selectedCourseId =
      courseId;

  }

  navigateToCourse(
    courseId: number
  ): void {

    this.router.navigate([
      '/courses',
      courseId
    ]);

  }

  trackByCourseId(
    index: number,
    course: Course
  ): number {

    return course.id;

  }

}