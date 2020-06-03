import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SchoolComponent } from './school.component';
import { SchoolSettingsComponent } from './school-settings/school-settings.component';
import { SchoolSettingsModalComponent } from './school-settings/school-settings-modal/school-settings-modal.component';
import { SubjectManagementItemDetails } from './subject-management/subject-management-item-details/subject-management-item-details.component';
import { ClassManagementItemDetailsComponent } from './class-management/class-management-item-details/class-management-item-details.component';
import { LevelManagementListComponent } from './level-management/level-management-list/level-management-list.component';
import { LevelManagementItemDetailsComponent } from './level-management/level-management-item-details/level-management-item-details.component';

const schoolRoutes = [{
    path: 'school',
    children: [
        {
            path: 'details',
            component: SchoolSettingsComponent,
        },
        {
            path: "edit",
            component: SchoolSettingsModalComponent
        }
        ,
        {
            path: "levels",
            component: LevelManagementListComponent,
            children: [
                {
                    path: ":id",
                    component: LevelManagementItemDetailsComponent,
                }
            ]
        },
        {
            path: "levels/:levelId/classes/:classId",
            component: ClassManagementItemDetailsComponent
        },
        {
            path: "levels/:levelId/subjects/:subjectId",
            component: SubjectManagementItemDetails
        }

    ]
}

]

@NgModule({
    imports: [
        RouterModule.forChild(schoolRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class SchoolRoutingModule { }