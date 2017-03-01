import { NgModule } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { FirebaseAppModule, FirebaseApp } from '../app';

export class FirebaseDatabase implements firebase.database.Database {
  app: firebase.app.App;
  goOffline: () => any;
  goOnline: () => any;
  ref: (path?: string) => firebase.database.Reference;
  refFromURL: (url: string) => firebase.database.Reference;
}

export function _firebaseDatabaseFactory(app: FirebaseApp) {
  return app.database();
}

export const FirebaseDatabaseProvider = {
  provide: FirebaseDatabase,
  useFactory: _firebaseDatabaseFactory,
  deps: [ FirebaseApp ]
};

@NgModule({
  imports: [ FirebaseAppModule ],
  providers: [ FirebaseDatabaseProvider ]
})
export class FirebaseDatabaseModule {}