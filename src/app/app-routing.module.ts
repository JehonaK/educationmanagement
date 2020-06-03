import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './shared/layout/base/base.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CoursesComponent } from './component/courses/courses.component';
import { CoursesGridComponent } from './component/courses/courses-grid/courses-grid.component';
import { CoursesListComponent } from './component/courses/courses-list/courses-list.component';
import { CourseDetailComponent } from './component/courses/course-detail/course-detail.component';
import { CourseForumComponent } from './component/courses/course-detail/course-forum/course-forum.component';
import { CourseForumListComponent } from './component/courses/course-detail/course-forum/course-forum-list/course-forum-list.component';
import { CourseForumPostComponent } from './component/courses/course-detail/course-forum/course-forum-post/course-forum-post.component';
import { CourseActivityListComponent } from './component/courses/course-detail/course-activities/course-activity-list/course-activity-list.component';
import { CourseActivityDetailsComponent } from './component/courses/course-detail/course-activities/course-activity-details/course-activity-details.component';
import { CourseGradeComponent } from './component/courses/course-detail/course-grade/course-grade.component';
import { CourseGradeListComponent } from './component/courses/course-detail/course-grade-list/course-grade-list.component';
import { GradeBookComponent } from './component/grade-book/grade-book.component';
import { NotificationComponent } from './component/notification/notification.component';
import { ScheduleComponent } from './component/schedule/schedule.component';
import { GeneralScheduleSettingsComponent } from './component/schedule/general-schedule-settings/general-schedule-settings.component';
import { ScheduleViewComponent } from './component/schedule/schedule-view/schedule-view.component';
import { PresenceComponent } from './component/schedule/presence/presence.component';
import { CreateScheduleComponent } from './component/schedule/create-schedule/create-schedule.component';
import { CreateSchedulePeriodicComponent } from './component/schedule/create-schedule/create-schedule-periodic/create-schedule-periodic.component';
import { CreateScheduleDateBasedComponent } from './component/schedule/create-schedule/create-schedule-date-based/create-schedule-date-based.component';
import { CourseCurriculumComponent } from './component/courses/course-detail/course-curriculum/course-curriculum.component';

import { LoginComponent } from './component/auth/login/login.component';
import { AuthComponent } from './component/auth/auth.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { ResetPasswordComponent } from './component/auth/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './component/auth/forgot-password/forgot-password.component';
import { MeetingsComponent } from './component/meetings/meetings.component';
import { CreateMeetingComponent } from './component/meetings/create-meeting/create-meeting.component';
import { EditMeetingComponent } from './component/meetings/edit-meeting/edit-meeting.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ChatComponent } from './component/chat/chat.component';
import { AuthGuard } from './component/auth/auth.guard';
import { StudentParentAssociationComponent } from './component/student-parent-association/student-parent-association.component';
import { ChatConversationBoxComponent } from './component/chat/chat-conversation-box/chat-conversation-box.component';
import { NewForumPostModalComponent } from './component/courses/course-detail/course-forum/new-forum-post-modal/new-forum-post-modal.component';
import { NewActivityModalComponent } from './component/courses/course-detail/course-activities/new-activity-modal/new-activity-modal.component';
import { EditCourseCurriculumModalComponent } from './component/courses/course-detail/edit-course-curriculum-modal/edit-course-curriculum-modal.component';
import {pathToFileURL} from 'url';

const routes: Routes = [
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
    path: '', canActivate: [AuthGuard], children: [
      {
        path: '',
        component: BaseComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
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
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'chat',
        component: ChatComponent,
        children: [{
          path: ":id",
          component: ChatConversationBoxComponent
        }
        ]
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
                    children: [
                      {
                        path: ':id',
                        component: CourseForumListComponent,
                      },
                    ]
                  },
                  {
                    path: 'post',
                    children: [
                      {
                        path: ':id',
                        component: CourseForumPostComponent,
                      }
                    ]
                  },
                  {
                    path: 'new-forum-post-modal',
                    children: [
                      {
                        path: ':id',
                        component: NewForumPostModalComponent,
                      }
                    ]
                  },
                ],
              },
              {
                path: 'activity',
                component: CourseForumComponent,
                children: [
                  {
                    path: 'list',
                    children: [
                      {
                        path: ':id',
                        component: CourseActivityListComponent,
                      },
                    ]
                  },
                  {
                    path: 'details',
                    children: [
                      {
                        path: ':id',
                        component: CourseActivityDetailsComponent,
                      }
                    ]
                  },
                  {
                    path: 'new-activity',
                    component: NewActivityModalComponent,
                  },
                ],
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
                children: [
                  {
                    path: ':id',
                    component: CourseCurriculumComponent,
                  }
                ]
              },
              {
                path: 'edit-course',
                component: EditCourseCurriculumModalComponent,
              },
            ],
          },
        ],
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
                component: CreateScheduleDateBasedComponent,
              },
            ],
          },
        ],
      },
      {
        path:'school',
        loadChildren: () => import('./component/school/school-routing.module')
          .then(m => m.SchoolRoutingModule)
      },
      {
        path: "students/associate",
        component: StudentParentAssociationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
