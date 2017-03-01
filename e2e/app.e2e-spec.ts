import { FirebaseReduxPage } from './app.po';

describe('firebase-redux App', () => {
  let page: FirebaseReduxPage;

  beforeEach(() => {
    page = new FirebaseReduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
