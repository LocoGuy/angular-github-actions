import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-github-actions';
  location: string = '';

  constructor() {
    this.location = window.location.href;
  }
}
