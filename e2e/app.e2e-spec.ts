import { JwtAuthExamplePage } from './app.po';

describe('jwt-auth-example App', () => {
  let page: JwtAuthExamplePage;

  beforeEach(() => {
    page = new JwtAuthExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
