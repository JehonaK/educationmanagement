import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './shared/layout/base/base.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HeaderComponent} from './shared/header/header.component';
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
import { CreateSchoolWizzardComponent } from './component/chat/create-school-wizzard/create-school-wizzard.component';

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
    CreateSchoolWizzardComponent,
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
