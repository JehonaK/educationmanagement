import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './shared/layout/base/base.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './shared/header/header.component';
import { TestingComponent } from './shared/testing/testing.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CoursesComponent } from './component/courses/courses.component';
import { CoursesGridComponent } from './component/courses/courses-grid/courses-grid.component';
import { CoursesListComponent } from './component/courses/courses-list/courses-list.component';
import { CourseDetailComponent } from './component/courses/course-detail/course-detail.component';
import { CourseForumComponent } from './component/courses/course-detail/course-forum/course-forum.component';
import { CourseForumListComponent } from './component/courses/course-detail/course-forum/course-forum-list/course-forum-list.component';
import { CourseForumPostComponent } from './component/courses/course-detail/course-forum/course-forum-post/course-forum-post.component';
import { CourseActivitiesComponent } from './component/courses/course-detail/course-activities/course-activities.component';
import { CourseActivityListComponent } from './component/courses/course-detail/course-activities/course-activity-list/course-activity-list.component';
import { CourseActivityDetailsComponent } from './component/courses/course-detail/course-activities/course-activity-details/course-activity-details.component';
import { AuthComponent } from './component/auth/auth.component';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { ResetPasswordComponent } from './component/auth/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './component/auth/forgot-password/forgot-password.component';
import { MeetingsComponent } from './component/meetings/meetings.component';
import { MeetingItemComponent } from './component/meetings/meeting-item/meeting-item.component';
import { CreateMeetingComponent } from './component/meetings/create-meeting/create-meeting.component';
import { EditMeetingComponent } from './component/meetings/edit-meeting/edit-meeting.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ChatComponent } from './component/chat/chat.component';
import { ChatContactMessageComponent } from './component/chat/chat-contact-message/chat-contact-message.component';
import { ChatIncomingMessageComponent } from './component/chat/chat-incoming-message/chat-incoming-message.component';
import { ChatOutgoingMessageComponent } from './component/chat/chat-outgoing-message/chat-outgoing-message.component';
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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchoolModule } from './component/school/school.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BaseComponent,
    TestingComponent,
    SidebarComponent,
    DashboardComponent,
    CoursesComponent,
    CoursesGridComponent,
    CoursesListComponent,
    CourseDetailComponent,
    CourseForumComponent,
    CourseForumListComponent,
    CourseForumPostComponent,
    CourseActivitiesComponent,
    CourseActivityListComponent,
    CourseActivityDetailsComponent,
    CourseActivityListComponent,
    CourseActivityDetailsComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    MeetingsComponent,
    MeetingItemComponent,
    CreateMeetingComponent,
    EditMeetingComponent,
    ProfileComponent,
    ChatComponent,
    ChatContactMessageComponent,
    ChatIncomingMessageComponent,
    ChatOutgoingMessageComponent,
    CourseGradeComponent,
    CourseGradeListComponent,
    GradeBookComponent,
    NotificationComponent,
    ScheduleComponent,
    GeneralScheduleSettingsComponent,
    ScheduleViewComponent,
    PresenceComponent,
    CreateScheduleComponent,
    CreateSchedulePeriodicComponent,
    CreateScheduleDateBasedComponent,
    CourseCurriculumComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule /* or CommonModule */,
    FormsModule,
    ReactiveFormsModule,
    SchoolModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
