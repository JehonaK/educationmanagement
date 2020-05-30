import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolComponent } from './school.component';
import { SchoolSettingsComponent } from './school-settings/school-settings.component';
import { SchoolNavItemComponent } from './school-nav-item/school-nav-item.component';
import { RouterModule } from '@angular/router';
import { SchoolSettingsModalComponent } from './school-settings/school-settings-modal/school-settings-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LevelManagementListComponent } from './level-management/level-management-list/level-management-list-component';
import { LevelManagementItemDetailsComponent } from './level-management/level-management-item-details/level-management-item-details.component';
import { ListComponent } from './list/list.component';
import { ClassManagementListComponent } from './class-management/class-management-list/class-management-list';
import { ClassManagementItemDetailsComponent } from './class-management/class-management-item-details/class-management-item-details.component';
import { SubjectManagementListComponent } from './subject-management/subject-management-list/subject-management-list.component';
import { SubjectManagementItemDetails } from './subject-management/subject-management-item-details/subject-management-item-details.component';
import { SubjectManagementLevelListComponent } from './subject-management/subject-management-level-list/subject-management-level-list.component';
import { SubjectTeacherAssignmentModalComponent } from './subject-management/subject-teacher-assignment-modal/subject-teacher-assignment-modal.component';
import { LevelCreationModalComponent } from './level-management/level-creation-modal/level-creation-modal.component';
import { SchoolRoutingModule } from './school-routing.module';

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
    ClassManagementListComponent,
    SubjectManagementListComponent,
    SubjectManagementItemDetails,
    SubjectManagementLevelListComponent,
    SubjectTeacherAssignmentModalComponent,
    LevelCreationModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    SchoolRoutingModule
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
    ClassManagementListComponent,
    SubjectManagementItemDetails,
    SubjectManagementLevelListComponent,
    SubjectTeacherAssignmentModalComponent,
    LevelCreationModalComponent
  ]
})
export class SchoolModule { }
