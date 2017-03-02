import { NgModule, OpaqueToken, ModuleWithProviders, Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
declare var System: any;

export interface FirebaseStatic {
  initializeApp: (config: Object, name: string) => any;
  apps: (any|null)[];
}

export const FirebaseAppConfig = new OpaqueToken('FirebaseAppConfig');
export const FirebaseAppName = new OpaqueToken('FirebaseAppName');
export const FirebaseStatic = new OpaqueToken('FirebaseStatic');
export const FeaturePromises = new OpaqueToken('FeaturePromises');

/**
 * Container for System.imports. Promise<any> should be a firebase.app.App
 * but ngc can't handle the dot namespaces.
 */
export interface FeaturePromises {
  app: () => Promise<FirebaseStatic>;
  auth: () => Promise<firebase.app.App>;
  database: () => Promise<firebase.app.App>;
  storage: () => Promise<firebase.app.App>;
  messaging: () => Promise<firebase.app.App>;
}

/**
 * Manages lazy loading of any. The Firebase SDK does not natively support 
 * lazy loading of Firebase features in a any. One an "app" is created it 
 * is effectively immutable, and if another feature is loaded using the "default" app name 
 * it will cause an error. This class works around this issue by create multiple "apps" to 
 * the same Firebase project. 
 */
@Injectable()
export class AsyncFirebaseApp {

  private AppNameAuth: string;
  private AppNameDatabase: string;
  private AppNameDatabaseAuth: string;

  constructor(
    private config: Object,
    private namePrefix: string,
    private features: any,
    private firebase: any) { 
      this.AppNameAuth = this.namePrefix + '~~auth';
      this.AppNameDatabase = this.namePrefix + '~~database';
      this.AppNameDatabaseAuth = this.namePrefix + '~~database~~auth';
    }

  /**
   * Asynchronously load firebase/auth. Then initialize a new app.
   */
  auth(): Promise<any> {
    return new Promise((resolve, reject) => {
      // Check for the existence of an already created app 
      // before doing a network call
      const possibleApp = this._checkAppCache(this.AppNameAuth);
      if (possibleApp) {
        resolve(possibleApp);
        return;
      }

      this.features.auth().then(auth => {
        const authApp = this._createApp(this.config, this.AppNameAuth);
        resolve(authApp);
      });
    });
  }

  /**
   * Asynchronously load firebase/database, and optionally firebase/auth. 
   * Then initialize a new app. firebase/auth load is defaulted to true.
   */
  database(auth: boolean = true): Promise<any> {
    if (auth) {
      return this._databaseWithAuth();
    }
    return this._database();
  }

  /**
   * Asynchronously load firebase/app and then firebase/database.
   */
  private _database() {
    return new Promise((resolve, reject) => {
      // Check for the existence of an already created app 
      // before doing a network call
      const possibleApp = this._checkAppCache(this.AppNameDatabase);
      if (possibleApp) {
        resolve(possibleApp);
        return;
      }

      this.features.database()
        .then(_ => {
          const databaseApp = this._createApp(this.config, this.AppNameDatabase);
          resolve(databaseApp);
        });
    });
  }

  /**
   * Asynchronously load firebase/app, firebase/auth, and firebase/database. 
   * Then initialize a new any. firebase/auth is loaded auth 
   * does not work across Firebase apps even for the same Firebase project.
   */
  private _databaseWithAuth() {
    return new Promise((resolve, reject) => {
      // Check for the existence of an already created app 
      // before doing a network call
      const possibleApp = this._checkAppCache(this.AppNameDatabaseAuth);
      if (possibleApp) {
        resolve(possibleApp);
        return;
      }

      this.features.auth()
        .then(auth => this.features.database())
        .then(db => {
          const databaseApp = this._createApp(this.config, this.AppNameDatabaseAuth);
          resolve(databaseApp);
        });
    });
  }

  private _createApp(config: {}, appName: string) {
    return firebase.initializeApp(this.config, appName);
  }

  private _checkAppCache(appName: string): any | null {
    return this.firebase.apps.find(app => app.name === appName);
  }

}

export function _firebaseAsyncAppFactory(config, name, features, firebase) {
  return new AsyncFirebaseApp(config, name, features, firebase);
}

export function _firebaseStaticFactory() {
  return firebase;
}

export function _featuresFactory(): FeaturePromises {
  return {
    app: () => System.import('firebase/app'),
    auth: () => System.import('firebase/auth'),
    database: () => System.import('firebase/database'),
    storage: () => System.import('firebase/storage'),
    messaging: () => System.import('firebase/messaging')
  };
}

export const FirebaseAsyncAppProvider = {
  provide: AsyncFirebaseApp,
  useFactory: _firebaseAsyncAppFactory,
  deps: [FirebaseAppConfig, FirebaseAppName, FeaturePromises, FirebaseStatic]
};


@NgModule({
  providers: [FirebaseAsyncAppProvider]
})
export class FirebaseAsyncAppModule {
  static initializeApp(config, name: string = '[LAZY_DEFAULT]'): ModuleWithProviders {
    return {
      ngModule: FirebaseAsyncAppModule,
      providers: [
        { provide: FirebaseAppConfig, useValue: config },
        { provide: FirebaseAppName, useValue: name },
        { provide: FeaturePromises, useFactory: _featuresFactory },
        { provide: FirebaseStatic, useFactory: _firebaseStaticFactory },
        FirebaseAsyncAppProvider,
      ]
    }
  }
}
