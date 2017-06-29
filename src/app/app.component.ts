import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name: string;
  message: string;

  onClick() {
    this.message = 'Hello ' + this.name;
  }
}
