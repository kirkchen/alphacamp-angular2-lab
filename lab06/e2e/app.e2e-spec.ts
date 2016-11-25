import { Lab06Page } from './app.po';

describe('lab06 App', function() {
  let page: Lab06Page;

  beforeEach(() => {
    page = new Lab06Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
