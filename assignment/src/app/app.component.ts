import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [`
    .whiteColor {
      color: white;
    }
  `]
})
export class AppComponent {
  showDetails = true;
  logs = [];

  toggleLog() {
    this.showDetails = !this.showDetails;
    this.logs.push(new Date());
  }
}
