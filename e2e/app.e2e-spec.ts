import { FuwaportalPage } from './app.po';

describe('fuwaportal App', () => {
  let page: FuwaportalPage;

  beforeEach(() => {
    page = new FuwaportalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
