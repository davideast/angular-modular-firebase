import { NgModule } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { FirebaseAppModule } from '../app/app.module';

@NgModule({
  imports: [ FirebaseAppModule ]
})
export class FirebaseDatabaseModule {}