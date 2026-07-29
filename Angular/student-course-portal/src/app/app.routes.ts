import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home';
import { CourseListComponent } from './features/course-list/course-list';
import { StudentProfileComponent } from './pages/student-profile/student-profile';

import { CourseDetail } from './pages/course-detail/course-detail';
import { NotFound } from './pages/not-found/not-found';
import { CoursesLayoutComponent } from './pages/courses-layout/courses-layout';
import { authGuard } from './guards/auth-guard';
import { unsavedChangesGuard } from './guards/unsaved-changes-guard';
import { ReactiveEnrollmentForm } from './pages/reactive-enrollment-form/reactive-enrollment-form';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'courses',
    component: CoursesLayoutComponent,
    children: [
      {
        path: '',
        component: CourseListComponent
      },
      {
        path: ':id',
        component: CourseDetail
      }
    ]
  },

  {
  path: 'enroll',
  loadComponent: () =>
    import('./pages/enrollment-form/enrollment-form')
      .then(m => m.EnrollmentForm)
},
{
  path: 'enroll-reactive',
  component: ReactiveEnrollmentForm,
  canDeactivate: [
    unsavedChangesGuard
  ]
},

  {
  path: 'profile',
  canActivate: [authGuard],
  component: StudentProfileComponent
},

  {
    path: '**',
    component: NotFound
  }
];