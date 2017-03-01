import { Injectable, OpaqueToken, Inject, NgModule, ModuleWithProviders } from '@angular/core';
import * as firebase from 'firebase/app';

const FirebaseAppConfig = new OpaqueToken('FirebaseAppConfig');

export class FirebaseApp {}

export function firebaseAppFactory(config: {}) {
  return firebase.initializeApp(config);
}

export const FirebaseAppProvider = {
  provide: FirebaseApp,
  useFactory: firebaseAppFactory,
  deps: [ FirebaseAppConfig ]
};

@NgModule({
  providers: [FirebaseAppProvider]
})
export class FirebaseAppModule {
  static initializeApp(config: {}): ModuleWithProviders {
    return {
      ngModule: FirebaseAppModule,
      providers: [
        { provide: FirebaseAppConfig, useValue: config },
        FirebaseAppProvider,
      ]
    }
  }
}