import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course';
import { CourseSummaryWidget } from '../../components/course-summary-widget/course-summary-widget';

@Component({
  selector: 'app-home',
  imports: [FormsModule,CourseSummaryWidget],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  courseCount = 0;
  constructor(
  private courseService: CourseService
) {}

  portalName = 'Student Course Portal';

  isPortalActive = true;

  message = '';

  searchTerm = '';

  availableCourses = 0;

  ngOnInit(): void {
    this.availableCourses = 12;

    console.log(
      'HomeComponent initialised — courses loaded'
    );
    this.courseCount =
    this.courseService
        .getCourses()
        .length;
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }
}