import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SchoolComponent } from './school.component';
import { SchoolSettingsComponent } from './school-settings/school-settings.component';
import { SchoolSettingsModalComponent } from './school-settings/school-settings-modal/school-settings-modal.component';
import { SubjectManagementListComponent } from './subject-management/subject-management-list/subject-management-list.component';
import { SubjectManagementLevelListComponent } from './subject-management/subject-management-level-list/subject-management-level-list.component';
import { SubjectManagementItemDetails } from './subject-management/subject-management-item-details/subject-management-item-details.component';
import { ClassManagementListComponent } from './class-management/class-management-list/class-management-list';
import { ClassManagementItemDetailsComponent } from './class-management/class-management-item-details/class-management-item-details.component';
import { LevelManagementListComponent } from './level-management/level-management-list/level-management-list-component';
import { LevelManagementItemDetailsComponent } from './level-management/level-management-item-details/level-management-item-details.component';

const schoolRoutes = [{
    path: '',
    component: SchoolComponent,
    children: [
        {
            path: "settings",
            component: SchoolSettingsComponent,
            children: [{
                path: "edit",
                component: SchoolSettingsModalComponent
            }
            ]
        },
        {
            path: "subjects",
            component: SubjectManagementListComponent,
            children: [
                {
                    path: ":name",
                    component: SubjectManagementLevelListComponent,
                    children: [
                        {
                            path: ':id',
                            component: SubjectManagementItemDetails
                        }
                    ]
                }
            ]
        }, {
            path: "classes",
            component: ClassManagementListComponent,
            children: [
                {
                    path: ":id",
                    component: ClassManagementItemDetailsComponent
                }
            ]
        }, {
            path: "levels",
            component: LevelManagementListComponent,
            children: [
                {
                    path: ":id",
                    component: LevelManagementItemDetailsComponent
                }
            ]
        },
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