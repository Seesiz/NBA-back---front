import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isStart: boolean = false;

  makeStart() {
    this.isStart = !this.isStart;
  }
}
