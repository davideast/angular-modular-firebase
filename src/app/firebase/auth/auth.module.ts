import { NgModule } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { FirebaseAppModule, FirebaseApp } from '../app';

export class FirebaseAuth implements firebase.auth.Auth {
  app: FirebaseApp;
  applyActionCode: (code: string) => firebase.Promise<any>;
  checkActionCode: (code: string) => firebase.Promise<any>;
  confirmPasswordReset: (code: string, newPassword: string) => firebase.Promise<any>;
  createCustomToken: (uid: string, developerClaims?: Object|null) => string;
  createUserWithEmailAndPassword: (email: string, password: string) => firebase.Promise<any>;
  currentUser: firebase.User|null;
  fetchProvidersForEmail: (email: string) => firebase.Promise<any>;
  getRedirectResult: () => firebase.Promise<any>;
  onAuthStateChanged: (
      nextOrObserver: Object, error?: (a: firebase.auth.Error) => any,
      completed?: () => any) => () => any;
  sendPasswordResetEmail: (email: string) => firebase.Promise<any>;
  signInAnonymously: () => firebase.Promise<any>;
  signInWithCredential: (credential: firebase.auth.AuthCredential) => firebase.Promise<any>;
  signInWithCustomToken: (token: string) => firebase.Promise<any>;
  signInWithEmailAndPassword: (email: string, password: string) => firebase.Promise<any>;
  signInWithPopup: (provider: firebase.auth.AuthProvider) => firebase.Promise<any>;
  signInWithRedirect: (provider: firebase.auth.AuthProvider) => firebase.Promise<any>;
  signOut: () => firebase.Promise<any>;
  verifyIdToken: (idToken: string) => firebase.Promise<any>;
  verifyPasswordResetCode: (code: string) => firebase.Promise<any>;
}

export function _firebaseAuthFactory(firebaseApp: FirebaseApp) {
  return firebaseApp.auth();
}

export const FirebaseAuthProvider = { 
  provide: FirebaseAuth,
  useFactory: _firebaseAuthFactory,
  deps: [ FirebaseApp ]
};

@NgModule({
  imports: [ FirebaseAppModule ],
  providers: [ FirebaseAuthProvider ]
})
export class FirebaseAuthModule {}