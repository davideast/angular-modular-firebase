import { Component, Inject } from '@angular/core';
import { FirebaseApp } from './firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(app: FirebaseApp) {
    console.log(app);
  }
}
