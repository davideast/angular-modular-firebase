import { Component, OnInit } from '@angular/core';
import { AsyncFirebaseApp } from '../firebase/async';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(asyncApp: AsyncFirebaseApp) {
    console.log('pre-loading database & auth app');
    asyncApp.database().then(app => {
      console.log('post-loading database & auth app', app);
    });
  }

  ngOnInit() {
  }

}
