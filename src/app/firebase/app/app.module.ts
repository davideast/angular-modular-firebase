import { Injectable, OpaqueToken, Inject, NgModule, ModuleWithProviders } from '@angular/core';
import * as firebase from 'firebase/app';

export const FirebaseAppConfig = new OpaqueToken('FirebaseAppConfig');

export class FirebaseApp implements firebase.app.App {
  name: string;
  options: {};
  auth: () => firebase.auth.Auth;
  database: () => firebase.database.Database;
  messaging: () => firebase.messaging.Messaging;
  storage: () => firebase.storage.Storage;
  delete: () => Promise<any>;
}

export function _firebaseAppFactory(config) {
  return firebase.initializeApp(config);
}

export const FirebaseAppProvider = {
  provide: FirebaseApp,
  useFactory: _firebaseAppFactory,
  deps: [ FirebaseAppConfig ]
};

@NgModule({
  providers: [FirebaseAppProvider]
})
export class FirebaseAppModule {
  static initializeApp(config): ModuleWithProviders {
    return {
      ngModule: FirebaseAppModule,
      providers: [
        { provide: FirebaseAppConfig, useValue: config },
        FirebaseAppProvider,
      ]
    }
  }
}