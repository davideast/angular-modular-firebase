import { Component, OnInit } from '@angular/core';
import { FirebaseDatabase } from '../firebase/database';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(db: FirebaseDatabase) {  debugger; }

  ngOnInit() {
  }

}
