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
import { ChatContactMessageComponent } from './component/chat/chat-conversation-list/chat-contact-message/chat-contact-message.component';
import { ChatIncomingMessageComponent } from './component/chat/chat-conversation-box/chat-incoming-message/chat-incoming-message.component';
import { ChatOutgoingMessageComponent } from './component/chat/chat-conversation-box/chat-outgoing-message/chat-outgoing-message.component';
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
import { AuthenticationInterceptor } from './shared/interceptors/authentication-interceptor';
import { SchoolModule } from './component/school/school.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StudentParentAssociationComponent } from './component/student-parent-association/student-parent-association.component';
import { ChatConversationBoxComponent } from './component/chat/chat-conversation-box/chat-conversation-box.component';
import { ChatConversaationListComponent } from './component/chat/chat-conversation-list/chat-conversation-list.component';
import { NewForumPostModalComponent } from './component/courses/course-detail/course-forum/new-forum-post-modal/new-forum-post-modal.component';
import { NewActivityModalComponent } from './component/courses/course-detail/course-activities/new-activity-modal/new-activity-modal.component';
import { EditCourseCurriculumModalComponent } from './component/courses/course-detail/edit-course-curriculum-modal/edit-course-curriculum-modal.component';
import { AddLessonModalComponent } from './component/courses/course-detail/add-lesson-modal/add-lesson-modal.component';
import { AddSubmissionModalComponent } from './component/courses/course-detail/course-activities/add-submission-modal/add-submission-modal.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from './component/calendar/calendar.module';
import {CalendarComponent} from './component/calendar/calendar.component';
import {CalendarDayComponent} from './component/calendar/calendar-day/calendar-day.component';
import {CalendarMonthComponent} from './component/calendar/calendar-month/calendar-month.component';
import {NewEventComponent} from './component/calendar/new-event/new-event.component';
import {EventFormComponent} from './component/calendar/new-event/event-form/event-form.component';
import {CalendarDayModalComponent} from './component/calendar/calendar-modal/calendar-day-modal.component';
import {CalendarDayModalEventComponent} from './component/calendar/calendar-modal/calendar-day-modal-event/calendar-day-modal-event.component';
import {EventDetailsModule} from './component/calendar/calendar-modal/event-details/event-details.module';
import {CalendarUploadComponent} from './component/calendar/calendar-upload/calendar-upload.component';
import {CalendarDownloadComponent} from './component/calendar/calendar-download/calendar-download.component';
import {DateDetailsComponent} from './component/calendar/calendar-modal/event-details/date-details/date-details.component';
import {TitleDetailsComponent} from './component/calendar/calendar-modal/event-details/title-details/title-details.component';
import {TimeDetailsComponent} from './component/calendar/calendar-modal/event-details/time-details/time-details.component';
import {DescriptionDetailsComponent} from './component/calendar/calendar-modal/event-details/description-details/description-details.component';
import {SchoolComponent} from './component/school/school.component';
import {SchoolSettingsComponent} from './component/school/school-settings/school-settings.component';
import {LevelManagementListComponent} from './component/school/level-management/level-management-list/level-management-list.component';
import {ClassManagementItemDetailsComponent} from './component/school/class-management/class-management-item-details/class-management-item-details.component';
import {SchoolNavItemComponent} from './component/school/school-nav-item/school-nav-item.component';
import {SchoolSettingsModalComponent} from './component/school/school-settings/school-settings-modal/school-settings-modal.component';
import {LevelManagementItemDetailsComponent} from './component/school/level-management/level-management-item-details/level-management-item-details.component';
import {ListComponent} from './component/school/list/list.component';
import {SubjectManagementItemDetails} from './component/school/subject-management/subject-management-item-details/subject-management-item-details.component';
import {SubjectTeacherAssignmentModalComponent} from './component/school/subject-management/subject-teacher-assignment-modal/subject-teacher-assignment-modal.component';
import {LevelConfigurationModalComponent} from './component/school/level-management/level-configuration-modal/level-configuration-modal.component';
import {SchoolClassConfigurationModalComponent} from './component/school/class-management/school-class-configuration-modal/school-class-configuration-modal.component';
import {SchoolSubjectConfigurationModalComponent} from './component/school/subject-management/school-subject-configuration-modal/school-subject-configuration-modal.component';
import {SchoolClassStudentInsertionModalComponent} from './component/school/class-management/school-class-student-insertion-modal/school-class-student-insertion-modal.component';
import {MatDialogModule} from '@angular/material/dialog';

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
    ChatConversationBoxComponent,
    ChatConversaationListComponent,
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
    CourseCurriculumComponent,
    NewForumPostModalComponent,
    NewActivityModalComponent,
    EditCourseCurriculumModalComponent,
    AddLessonModalComponent,
    AddSubmissionModalComponent,
    StudentParentAssociationComponent,
    CalendarComponent,
    CalendarDayComponent,
    CalendarMonthComponent,
    NewEventComponent,
    EventFormComponent,
    CalendarDayModalComponent,
    CalendarDayModalEventComponent,
    CalendarUploadComponent,
    CalendarDownloadComponent,
    DateDetailsComponent,
    TitleDetailsComponent,
    TimeDetailsComponent,
    DescriptionDetailsComponent,
    SchoolComponent,
    SchoolSettingsComponent,
    LevelManagementListComponent,
    ClassManagementItemDetailsComponent,
    SchoolNavItemComponent,
    SchoolSettingsModalComponent,
    LevelManagementItemDetailsComponent,
    ListComponent,
    SubjectManagementItemDetails,
    SubjectTeacherAssignmentModalComponent,
    LevelConfigurationModalComponent,
    SchoolClassConfigurationModalComponent,
    SchoolSubjectConfigurationModalComponent,
    SchoolClassStudentInsertionModalComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule /* or CommonModule */,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatDialogModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
