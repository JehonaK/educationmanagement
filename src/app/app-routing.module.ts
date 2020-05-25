import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BaseComponent} from './shared/layout/base/base.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {CoursesComponent} from './component/courses/courses.component';
import {CoursesGridComponent} from './component/courses/courses-grid/courses-grid.component';
import {CoursesListComponent} from './component/courses/courses-list/courses-list.component';
import {CourseDetailComponent} from './component/courses/course-detail/course-detail.component';
import {CourseForumComponent} from './component/courses/course-detail/course-forum/course-forum.component';
import {CourseForumListComponent} from './component/courses/course-detail/course-forum/course-forum-list/course-forum-list.component';
import {CourseForumPostComponent} from './component/courses/course-detail/course-forum/course-forum-post/course-forum-post.component';
import {CourseActivityListComponent} from './component/courses/course-detail/course-activities/course-activity-list/course-activity-list.component';
import {CourseActivityDetailsComponent} from './component/courses/course-detail/course-activities/course-activity-details/course-activity-details.component';
import { LoginComponent } from './component/auth/login/login.component';
import { AuthComponent } from './component/auth/auth.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { ResetPasswordComponent } from './component/auth/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './component/auth/forgot-password/forgot-password.component';
import { MeetingsComponent } from './component/meetings/meetings.component';
import { CreateMeetingComponent } from './component/meetings/create-meeting/create-meeting.component';
import { EditMeetingComponent } from './component/meetings/edit-meeting/edit-meeting.component';

const routes: Routes = [
  {
    path: '',
    component:  BaseComponent,
  },
  {
    path: 'dashboard',
    component:  DashboardComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
    ]
  },
  {
    path: 'meetings',
    component: MeetingsComponent
  },
  {
    path: 'meetings/create-meeting',
    component: CreateMeetingComponent
  },
  {
    path: 'meetings/edit-meeting',
    component: EditMeetingComponent
  },
  {
    path: 'courses',
    component: CoursesComponent,
    children: [
      {
        path: 'grid',
        component: CoursesGridComponent
      },
      {
        path: 'list',
        component: CoursesListComponent
      },
      {
        path: 'course-detail',
        component: CourseDetailComponent,
        children: [
          {
            path: 'forum',
            component: CourseForumComponent,
            children: [
              {
                path: 'list',
                component: CourseForumListComponent
              },
              {
                path: 'post',
                component: CourseForumPostComponent
              }
            ]
          },
          {
            path: 'activity',
            component: CourseForumComponent,
            children: [
              {
                path: 'list',
                component: CourseActivityListComponent
              },
              {
                path: 'post',
                component: CourseActivityDetailsComponent
              }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
