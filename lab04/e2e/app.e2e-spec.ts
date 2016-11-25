import { Lab04Page } from './app.po';

describe('lab04 App', function() {
  let page: Lab04Page;

  beforeEach(() => {
    page = new Lab04Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
