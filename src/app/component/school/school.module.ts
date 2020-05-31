import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolComponent } from './school.component';
import { SchoolSettingsComponent } from './school-settings/school-settings.component';
import { SchoolNavItemComponent } from './school-nav-item/school-nav-item.component';
import { RouterModule } from '@angular/router';
import { SchoolSettingsModalComponent } from './school-settings/school-settings-modal/school-settings-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LevelManagementListComponent } from './level-management/level-management-list/level-management-list.component';
import { LevelManagementItemDetailsComponent } from './level-management/level-management-item-details/level-management-item-details.component';
import { ListComponent } from './list/list.component';
import { ClassManagementItemDetailsComponent } from './class-management/class-management-item-details/class-management-item-details.component';
import { SubjectManagementItemDetails } from './subject-management/subject-management-item-details/subject-management-item-details.component';
import { SubjectTeacherAssignmentModalComponent } from './subject-management/subject-teacher-assignment-modal/subject-teacher-assignment-modal.component';
import { LevelConfigurationModalComponent } from './level-management/level-configuration-modal/level-configuration-modal.component';
import { SchoolRoutingModule } from './school-routing.module';
import { SchoolClassConfigurationModalComponent } from './class-management/school-class-configuration-modal/school-class-configuration-modal.component';
import { SchoolSubjectConfigurationModalComponent } from './subject-management/school-subject-configuration-modal/school-subject-configuration-modal.component';
import { SchoolClassStudentInsertionModalComponent } from './class-management/school-class-student-insertion-modal/school-class-student-insertion-modal.component';

@NgModule({
  declarations: [
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
    CommonModule,
    RouterModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    SchoolRoutingModule,
  ],
  exports: [
    SchoolComponent,
    SchoolSettingsComponent,
    LevelManagementListComponent,
    ClassManagementItemDetailsComponent,
    SchoolNavItemComponent,
    ListComponent,
    LevelManagementItemDetailsComponent,
    LevelManagementListComponent,
    SubjectManagementItemDetails,
    SubjectTeacherAssignmentModalComponent,
    LevelConfigurationModalComponent,
    SchoolClassConfigurationModalComponent
  ]
})
export class SchoolModule { }
