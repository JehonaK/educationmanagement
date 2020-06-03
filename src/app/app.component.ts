import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<section class="section main-container">
  <app-header></app-header>

  <div class="container">
    <div class="columns">
      <div class="column is-3-desktop">
        <app-sidebar></app-sidebar>
      </div>
      <div class="column is-9-desktop st-pusher" id="content">
        <div class="st-content" style="overflow: scroll">

          <!-- extra div for emulating position:fixed of the menu -->
          <div class="st-content-inner padding-none">

            <div class="container-fluid">

              <router-outlet></router-outlet>

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
`
})
export class AppComponent {
  title = 'educationmanagement';
}
