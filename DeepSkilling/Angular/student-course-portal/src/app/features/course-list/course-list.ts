import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { FormsModule } from '@angular/forms';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import { CourseService } from '../../services/course';
import {
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import { CourseCardComponent }
from '../../components/course-card/course-card';

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
})
export class CourseListComponent implements OnInit {

  constructor(
  private courseService: CourseService,
  private router: Router,
  private route: ActivatedRoute,
  private readonly cdr: ChangeDetectorRef
) {}
  isLoading = true;
  selectedCourseId: number | null = null;

  courses: Course[] = [];
  searchTerm = '';
  filteredCourses: Course[] = [];
  ngOnInit(): void {

  console.log('CourseList initialized');
  this.courses =
  this.courseService.getCourses();

this.searchTerm =
  this.route.snapshot
    .queryParamMap
    .get('search') || '';

this.applySearch();

  setTimeout(() => {

    this.isLoading = false;
    this.cdr.detectChanges();

    console.log(
      'Courses loaded successfully'
    );

  }, 1500);

}
  updateSearch(): void {

  this.router.navigate(
    ['/courses'],
    {
      queryParams: {
        search: this.searchTerm
      }
    }
  );

}

  onEnroll(courseId: number): void {

  console.log(
    'Course selected: ' + courseId
  );

  this.selectedCourseId = courseId;

}

  /*
    trackBy improves rendering performance by allowing Angular
    to uniquely identify each course using its id. Without trackBy,
    Angular recreates DOM elements unnecessarily whenever the
    collection changes.
  */
  trackByCourseId(
    index: number,
    course: Course
  ): number {

    return course.id;

  }
  navigateToCourse(
  courseId: number
): void {

  this.router.navigate([
    '/courses',
    courseId
  ]);

}
applySearch(): void {

  const search =
    this.searchTerm
      .toLowerCase()
      .trim();

  this.filteredCourses =
    this.courses.filter(course =>
      course.name
        .toLowerCase()
        .includes(search)
    );

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

  this.applySearch();

}

}