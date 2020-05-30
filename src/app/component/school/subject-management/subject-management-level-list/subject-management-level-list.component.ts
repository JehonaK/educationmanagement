import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LEVELS, LevelModel } from '../../entities/level.model';

@Component({
  selector: 'subject-management-level-list',
  template: `<div class="subject-event-list"><app-list [list]="listDetails()"></app-list></div>`,
  styles: [`.subject-event-list{
    margin-left:20px;
  }`]
})
export class SubjectManagementLevelListComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  levels: LevelModel[];

  private subjectName: string;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.subjectName = params.get('name');
      this.levels = LEVELS.filter(lvl => lvl.subjects.filter(subj => subj.name === params.get('name')));
    })

  }

  listDetails() {

    return this.levels.map(
      level => {
        return {
          name: level.name,
          id: level.subjects.filter(subj =>
            subj.name === this.subjectName)
          [0].id
        }
      }
    )
  }
}
