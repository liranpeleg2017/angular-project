import { TempProject2Page } from './app.po';

describe('temp-project2 App', () => {
  let page: TempProject2Page;

  beforeEach(() => {
    page = new TempProject2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
