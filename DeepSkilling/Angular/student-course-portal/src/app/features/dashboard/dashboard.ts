import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {
  portalTitle: string = 'Student Course Portal';

  studentName: string = 'Roshini';

  enrolledCourses: number = 4;

  currentSemester: number = 7;
}