import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'school-nav-item',
  template: `
  {{title}}`
})
export class SchoolNavItemComponent implements OnInit {

  @Input()
  title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
