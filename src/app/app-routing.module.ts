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
import {CourseGradeComponent} from './component/courses/course-detail/course-grade/course-grade.component';
import {CourseGradeListComponent} from './component/courses/course-detail/course-grade-list/course-grade-list.component';
import {GradeBookComponent} from './component/grade-book/grade-book.component';
import {NotificationComponent} from './component/notification/notification.component';
import {ScheduleComponent} from './component/schedule/schedule.component';
import {GeneralScheduleSettingsComponent} from './component/schedule/general-schedule-settings/general-schedule-settings.component';
import {ScheduleViewComponent} from './component/schedule/schedule-view/schedule-view.component';
import {PresenceComponent} from './component/schedule/presence/presence.component';
import {CreateScheduleComponent} from './component/schedule/create-schedule/create-schedule.component';
import {CreateSchedulePeriodicComponent} from './component/schedule/create-schedule/create-schedule-periodic/create-schedule-periodic.component';
import {CreateScheduleDateBasedComponent} from './component/schedule/create-schedule/create-schedule-date-based/create-schedule-date-based.component';
import {CourseCurriculumComponent} from './component/courses/course-detail/course-curriculum/course-curriculum.component';


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
                path: 'details',
                component: CourseActivityDetailsComponent
              }
            ]
          },
          {
            path: 'grade',
            component: CourseGradeComponent
          },
          {
            path: 'grade-list',
            component: CourseGradeListComponent
          },
          {
            path: 'curriculum',
            component: CourseCurriculumComponent
          }
        ]
      }
    ]
  },
  {
    path: 'grade-book',
    component: GradeBookComponent
  },
  {
    path: 'notification',
    component: NotificationComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
    children: [
      {
        path: 'general-settings',
        component: GeneralScheduleSettingsComponent
      },
      {
        path: 'view',
        component: ScheduleViewComponent
      },
      {
        path: 'presence',
        component: PresenceComponent
      },
      {
        path: 'create',
        component: CreateScheduleComponent,
        children: [
          {
            path: 'periodic',
            component: CreateSchedulePeriodicComponent
          },
          {
            path: 'date-based',
            component: CreateScheduleDateBasedComponent
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
