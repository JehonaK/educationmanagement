import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
