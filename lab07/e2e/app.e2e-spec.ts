import { Lab07Page } from './app.po';

describe('lab07 App', function() {
  let page: Lab07Page;

  beforeEach(() => {
    page = new Lab07Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
