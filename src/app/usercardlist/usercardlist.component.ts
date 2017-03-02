import { Component, OnInit } from '@angular/core';
import { AsyncFirebaseApp } from '../firebase/async';

@Component({
  selector: 'app-usercardlist',
  templateUrl: './usercardlist.component.html',
  styleUrls: ['./usercardlist.component.css']
})
export class UserCardList implements OnInit {

  constructor(private asyncApp: AsyncFirebaseApp) { }

  ngOnInit() {
    console.log('pre-loading auth app');
    this.asyncApp.auth().then(app => {
      console.log('post-loading auth app', app)
    });
  }

}
